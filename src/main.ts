import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import { setupRouter } from './router';
import { setupStore } from './store';
import { initI18n } from './locales';
import 'ant-design-vue/dist/antd.css';
import 'animate.css';

function bootstrap() {
  const app = createApp(App);

  // 配置路由
  setupRouter(app);

  // 状态管理
  setupStore(app);

  // 配置antd
  app.use(Antd);

  // 配置i18n
  initI18n(app);

  // 挂载
  app.mount('#app');
}

bootstrap();
