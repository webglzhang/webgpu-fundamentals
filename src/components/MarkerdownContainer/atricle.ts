export const demoAtricle:string =  `# 记一次给Three.js 提 pr 的经历！！ 哈哈
## 缘由
&#8195;&#8195;在 Three.js r110的版本中，mrdoob 添加了InstancedMesh，在一次issue的讨论中，有人提到想知道它具体的是哪个实例， 有人建议gpu pick，也就是基于颜色编码去做。哈哈，巧了，最近一直在读Three..js 的源码，正好包含raycast部分，我就尝试着去实现InstancedMesh.raycast，也在这个issue中表述了我的想法，也很多人支持。  
## 开发&提交
&#8195;&#8195;整个开发过程持续了一周，每天晚上下班就回家搞，很累，但是很兴奋。因为Mugen87在看了我的issue之后，建议我去做一个pr，就这样持续一周的时间，不断的code review，不断的修改，最终也受到了各位大佬的认可。我制作做的demo也被收录到Three.js 官方demo中，真的很激动，这是我第一次给这么大的开源库提pr,太兴奋了。哈哈哈哈。
## 思路
&#8195;&#8195;这是被收录后demo的地址：[webgl_instancing_raycast](https://threejs.org/examples/?q=raycas#webgl_instancing_raycast)  ! ! mrdoob在正式发布r111之前做了一次修改，mesh换成了粉色的球体，这颜色绝了，doob还有一颗少女心，哈哈哈。
&#8195;&#8195;大家可以点进去体验下，选中一个球就会旋转，这些球是利用多实例渲染的，也就是现在InstancedMesh，这种渲染方式可以提高性能，但是并不能像普通Mesh那样利用raycast的去拾取， 这也是我这次pr中要做的，实现InstancedMesh的raycast。  
&#8195;&#8195;主要的实现思路是利用每个实例的模型矩阵去做判断，哈哈，不懂的话就去翻一翻源码，回来再看这句话就应该懂了。这次pr中，学到了好多，良好的代码设计，编码规范等等。也体验了次code review的过程，哈哈，这也算是一次正式的开发流程了吧！下面截了几张图作为留念。
![在这里插入图片描述](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0f76fa5c2bd48d59b7acdb9b16affe0~tplv-k3u1fbpfcp-zoom-1.image)
![在这里插入图片描述](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/269deacab46c4a59a9f3c0d4cfbb7ecc~tplv-k3u1fbpfcp-zoom-1.image)
&#8195;&#8195;这次经历真的非常完美，体验一次完整的开发流程，主要是平时写代码，没人做code review，自己都忘记了如何利用好oop的编程思想做出好的代码设计，以后有时间继续做pr，对Three.js感兴趣的朋友可以加我的技术交流群，一起交流，一起学习，2020冲鸭！！
## 多多交流
![在这里插入图片描述](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/14b2ecb071b64127ac4dc6043b8ed357~tplv-k3u1fbpfcp-zoom-1.image)
`;