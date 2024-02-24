export const CURRENT_CONFIG = {

  // license
  appId: '135860', // You need to go to the development website to apply.
  appKey: '3ca2ed73da8d49f6a7d38c0a5b06c11', // You need to go to the development website to apply.
  appLicense: 'cY+hdGbzEKWpQLHlvnI9zmNi4vGVLC/ztNy2NmKgAZYzYaKiqgKJy3dxznjRbLpOsBoVNmPYrXcJhuWc0VE71CwpLOkkjtJHhgAHVh4SW4v6ljcjcQ+AzV/je0MGiOQqL58h8AkZLPxC0kABAsdg11LxuBYojA5mc3FUV1mNQNU=', // You need to go to the development website to apply.

  // http
  baseURL: 'https://183.62.140.181:6443/', // This url must end with "/". Example: 'http://192.168.1.1:6789/'
  websocketURL: 'wss://183.62.140.181:6443/api/v1/ws', // Example: 'ws://192.168.1.1:6789/api/v1/ws'

  // livestreaming
  // RTMP  Note: This IP is the address of the streaming server. If you want to see livestream on web page, you need to convert the RTMP stream to WebRTC stream.
  rtmpURL: 'rtmp://183.62.140.181/live/', // Example: 'rtmp://192.168.1.1/live/'
  // GB28181 Note:If you don't know what these parameters mean, you can go to Pilot2 and select the GB28181 page in the cloud platform. Where the parameters same as these parameters.
  gbServerIp: 'Please enter the server ip.',
  gbServerPort: 'Please enter the server port.',
  gbServerId: 'Please enter the server id.',
  gbAgentId: 'Please enter the agent id',
  gbPassword: 'Please enter the agent password',
  gbAgentPort: 'Please enter the local port.',
  gbAgentChannel: 'Please enter the channel.',
  // RTSP
  rtspUserName: 'Please enter the username.',
  rtspPassword: 'Please enter the password.',
  rtspPort: '8554',
  // Agora
  agoraAPPID: 'Please enter the agora app id.',
  agoraToken: 'Please enter the agora temporary token.',
  agoraChannel: 'Please enter the agora channel.',

  // map
  // You can apply on the AMap website.
  amapKey: '12abb02fd5cb731833f0f4762ecb0467',
  amapCode: '09ebadf3244695c49f254be1106deb48',

}
