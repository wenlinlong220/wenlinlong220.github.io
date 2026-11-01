// 日常更新只需修改此文件。每条资料分别维护 zh（中文）和 en（英文）。
window.PROFILE = {
  zh: {
    name: '温麟陇', otherName: 'Wen Linlong', role: '机器人工程 · 本科生', university: '重庆大学', school: '机械与运载工程学院', location: '中国 · 重庆',
    nav: ['关于我', '研究方向', '项目', '经历', '教育'],
    titles: ['关于我', '研究方向', '研究与项目', '荣誉与经历', '教育背景'],
    biography: ['你好，我是温麟陇，博士就读于浙江大学机械电子工程主页，本科就读于重庆大学机器人工程专业。我的兴趣集中在足式机器人运动控制，尤其关注基于强化学习的机器人运动控制。', '欢迎交流研究想法与项目经验。'],
    contact: '与我联系 ↗',
    research: [
      { title: '强化学习', description: '关注强化学习在足式机器人运动控制中的应用。' },
      { title: '电液足式机器人', description: '尝试探索电液驱动的足式机器人的强化学习运动控制设计' }
    ],
    projects: [
      { images: [{"src":"assets/underwater-control.png","caption":"模型预测控制与运动学求解","width":1562,"height":866},{"src":"assets/underwater-learning.png","caption":"强化学习与仿真训练框架","width":1557,"height":851}], title: '六自由度水下抓取机器人', kind: '本科阶段研究项目', period: '2026.02 - 2026.07', description: '围绕水下机器人的运动控制开展研究，基于 ROS 2 与仿真平台进行 MPC、PID、PPO 控制方法的设计与三维轨迹跟踪验证。', tags: ['ROS 2', 'MuJoCo', 'MJLAB', 'PPO', 'MPC'] },
      { ...{"images":[{"src":"assets/smart-car-framework.png","caption":"智能车视觉感知与自主行驶算法框架","width":1707,"height":904}],"links":[{"href":"assets/smart-car-award.pdf","label":"查看获奖证书"}]}, title: '全国大学生智能汽车竞赛-完全模型组', kind: '竞赛项目', period: '2025.02 - 2025.08', description: '获得全国一等奖，负责视觉循迹算法、运动控制系统搭建与 YOLO 目标检测模型部署。', tags: ['视觉循迹', '运动控制', 'YOLO', 'Ubuntu'] }
    ],
    experience: [
    ],
    education: [
  {
    title: '自浙江大学',
    description: '机械工程学院 · 机械电子工程',
    degree: '博士研究生',
    period: '2027 — 我也不知道'
  },
  {
    title: '重庆大学',
    description: '机械与运载工程学院 · 机器人工程',
    degree: '本科',
    period: '2023 — 2027'
  }
],
  skills: '工具与技能',
  backTop: '返回顶部 ↑'
  },
  en: {
    name: 'Wen Linlong', otherName: '温麟陇', role: 'Undergraduate · Robotics Engineering', university: 'Chongqing University', school: 'School of Mechanical and Vehicle Engineering', location: 'Chongqing, China',
    nav: ['About', 'Research', 'Projects', 'Experience', 'Education'],
    titles: ['About me', 'Research interests', 'Research & projects', 'Honors & experience', 'Education'],
    biography: ['Hello, I’m Wen Linlong. I am pursuing a Ph.D. in Mechatronic Engineering at Zhejiang University and studied Robotics Engineering as an undergraduate at Chongqing University. My research interests focus on legged robot motion control, particularly reinforcement learning for robot motion control.', 'I welcome conversations about research ideas and project experiences.'],
    contact: 'Get in touch ↗',
    research: [
      { title: 'Reinforcement learning', description: 'Applying reinforcement learning to motion control for legged robots.' },
      { title: 'Electro-hydraulic legged robots', description: 'Exploring reinforcement learning-based motion control for electro-hydraulically actuated legged robots.' }
    ],
    projects: [
      {
        title: '6-DOF underwater grasping robot', kind: 'UNDERGRADUATE RESEARCH PROJECT', period: 'Feb 2026 - Jul 2026',
        description: 'Research on underwater robot motion control, including MPC, PID, and PPO controller design and evaluation of 3D trajectory tracking using ROS 2 and simulation platforms.',
        tags: ['ROS 2', 'MuJoCo', 'MJLAB', 'PPO', 'MPC'],
        images: [
          { src: 'assets/underwater-control.png', caption: 'Model predictive control and kinematics', width: 1562, height: 866 },
          { src: 'assets/underwater-learning.png', caption: 'Reinforcement learning and simulation framework', width: 1557, height: 851 }
        ]
      },
      {
        title: 'National Undergraduate Intelligent Car Competition — Full Model Category', kind: 'COMPETITION PROJECT', period: 'Feb 2025 - Aug 2025',
        description: 'National First Prize. Responsible for vision-based line following, motion control system development, and deployment of a YOLO object detection model.',
        tags: ['Visual line following', 'Motion control', 'YOLO', 'Ubuntu'],
        images: [{ src: 'assets/smart-car-framework.png', caption: 'Smart car visual perception and autonomous driving framework', width: 1707, height: 904 }],
        links: [{ href: 'assets/smart-car-award.pdf', label: 'View award certificate' }]
      }
    ],
    experience: [],
    education: [
      { title: 'Zhejiang University', description: 'School of Mechanical Engineering · Mechatronic Engineering', degree: 'Ph.D. student', period: '2027 — End date TBD' },
      { title: 'Chongqing University', description: 'School of Mechanical and Vehicle Engineering · Robotics Engineering', degree: 'Undergraduate', period: '2023 — 2027' }
    ],
    skills: 'TOOLS & SKILLS',
    backTop: 'Back to top ↑'
  }
};
