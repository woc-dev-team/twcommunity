export default {
    apps: [
      {
        name: "twc-server",   // 애플리케이션 이름
        script: "./src/index.ts",  // 애플리케이션의 진입점 (src/index.ts로 설정)
        cwd: "/home/ubuntu/twcommunity",  // 프로젝트 디렉토리 경로 지정
        interpreter: "/home/ubuntu/.nvm/versions/node/v22.14.0/bin/node", // Node.js 경로 지정 (필요 시)
        exec_mode: "fork",   // 단일 프로세스로 실행
        instances: 1,        // 인스턴스 수 (1개로 설정)
        watch: false,        // 코드 변경을 감시하지 않음
      },
    ],
};
  