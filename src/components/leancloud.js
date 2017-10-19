const AV = require('leancloud-storage');

const APP_ID = 'E1tdtMXPl1dhn36xlLxVYJMk-gzGzoHsz';
const APP_KEY = 'yF2RQ8kWLsAWDijlVYgDMPt7';

AV.init({
	appId: APP_ID,
	appKey: APP_KEY
});

export default {
	install(Vue,options){
		Vue.prototype.$AV = AV;
	}
}