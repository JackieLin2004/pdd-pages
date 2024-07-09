import {ref, onMounted} from 'vue';

export const getImages = (imagePathGlob: Record<string, () => Promise<{ default: string }>>) => {
    // 定义一个响应式数组 imagePaths，用于存储所有图片的路径
    // 初始值为空数组，类型为字符串数组
    const imagePaths = ref<string[]>([]);

    // 在组件挂载时就解析图片路径
    onMounted(async () => {
        // 获取所有图片路径的键（相对路径）
        // 返回包含所有键（图片的相对路径）的数组
        // 对图片路径的键进行排序，确保按自然数字顺序加载图片，采用正则化的方式
        const imageKeys = Object.keys(imagePathGlob).sort((a, b) => {
            const aNumber = parseInt(a.match(/(\d+)/)?.[0] || '0');
            const bNumber = parseInt(b.match(/(\d+)/)?.[0] || '0');
            return aNumber - bNumber;
        });

        // 使用 for 循环遍历 imageKeys 数组中的每一个键
        for (let i = 0; i < imageKeys.length; i++) {
            // 获取当前图片的加载函数
            // images[imageKeys[i]] 是一个异步函数，用于加载对应的图片模块
            const loadImage = imagePathGlob[imageKeys[i]];

            // 调用加载函数并等待结果
            // 使用 await 调用异步函数 loadImage()，获取包含图片路径的模块对象
            // 这里使用 TypeScript 类型断言，将结果断言为 { default: string } 类型
            // 以确保模块对象包含 default 属性，该属性的值是图片路径
            const imageModule = await loadImage();

            // imageModule.default 是实际的图片路径，将其添加到 imagePaths 响应式数组中
            imagePaths.value.push(imageModule.default);
        }
    });

    // 最后返回路径即可
    return {imagePaths};
};
