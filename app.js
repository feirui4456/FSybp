// 1. 动态渐变背景控制逻辑
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const angle = document.getElementById('angle');
const card = document.querySelector('.dashboard-card');

function updateGradient() {
    card.style.background = `linear-gradient(${angle.value}, ${color1.value}, ${color2.value})`;
}

color1.addEventListener('input', updateGradient);
color2.addEventListener('input', updateGradient);
angle.addEventListener('change', updateGradient);

// 2. 飞书 SDK 初始化与多维表格数据获取
window.tt.miniProgram.getEnv((res) => {
    console.log('当前运行环境：', res);
});

// 初始化飞书开放能力（若作为多维表格高级插件，需调用单独的扩展SDK）
// 以下为模拟从飞书数据源获取实时更新数据的逻辑
function fetchFeishuData() {
    // 实际生产中，使用组件内部 SDK 如：tt.request 或多维表格的 base.getActiveTable()
    // 此处进行定时模拟刷新
    setInterval(() => {
        // 模拟生产线或业务数据的轻微波动
        const mockRate = (90 + Math.random() * 8).toFixed(1) + '%';
        const mockOutput = Math.floor(1200 + Math.random() * 200).toLocaleString();
        
        document.getElementById('rate-value').innerText = mockRate;
        document.getElementById('output-value').innerText = mockOutput;
    }, 5000); 
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    updateGradient();
    fetchFeishuData();
});