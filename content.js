// 日常更新只需修改此文件。每条资料分别维护 zh（中文）和 en（英文）。
window.PROFILE = {
  zh: {
    name: '温麟陇', otherName: 'Wen Linlong', role: '机器人工程 · 本科生', university: '重庆大学', school: '机械与运载工程学院', location: '中国 · 重庆',
    nav: ['关于我', '研究方向', '项目', '经历', '教育'],
    titles: ['关于我', '研究方向', '研究与项目', '荣誉与经历', '教育背景'],
    biography: ['你好，我是温麟陇，就读于重庆大学机器人工程专业。我的兴趣集中在机器人、控制与数学，尤其关注基于强化学习的机器人运动控制。', '本科期间，我参与了机器人相关项目与学科竞赛，希望把控制理论、学习算法与真实机器人系统结合起来。欢迎交流研究想法与项目经验。'],
    contact: '与我联系 ↗',
    research: [
      { title: '机器人运动控制', description: '关注机器人运动建模、轨迹跟踪与控制算法。' },
      { title: '强化学习', description: '探索 PPO 等方法在机器人运动控制任务中的应用。' },
      { title: '仿真与机器人系统', description: '借助 ROS 2、MuJoCo 与 Isaac Lab 进行算法开发和验证。' }
    ],
    projects: [
      { title: '六自由度水下抓取机器人', kind: '研究项目', period: '2026.02 起', description: '围绕水下机器人的运动控制开展研究，基于 ROS 2 与仿真平台进行 PID、PPO 控制方法的设计与三维轨迹跟踪验证。', tags: ['ROS 2', 'MuJoCo', 'Isaac Lab', 'PPO', 'PID'] },
      { title: '全国大学生智能汽车竞赛', kind: '竞赛项目', period: '2025', description: '获得全国一等奖，负责视觉循迹算法、运动控制系统搭建与 YOLO 目标检测模型部署。', tags: ['视觉循迹', '运动控制', 'YOLO', 'Ubuntu'] }
    ],
    experience: [
      { period: '2024 / 2025', title: '国家奖学金', description: '连续两年获得国家奖学金。' },
      { period: '2025', title: '全国大学生智能汽车竞赛 · 全国一等奖', description: '参与视觉算法与运动控制系统开发。' },
      { period: '2025—2026', title: '课程助教 · 优秀助教', description: '担任《控制理论基础》《机械制图》课程助教。' }
    ],
    education: { title: '重庆大学', description: '机械与运载工程学院 · 机器人工程', degree: '本科' }, skills: '工具与技能', backTop: '返回顶部 ↑'
  },
  en: {
    name: 'Wen Linlong', otherName: '温麟陇', role: 'Undergraduate · Robotics Engineering', university: 'Chongqing University', school: 'School of Mechanical and Vehicle Engineering', location: 'Chongqing, China',
    nav: ['About', 'Research', 'Projects', 'Experience', 'Education'],
    titles: ['About me', 'Research interests', 'Research & projects', 'Honors & experience', 'Education'],
    biography: ['Hello, I’m Wen Linlong, an undergraduate studying Robotics Engineering at Chongqing University. My interests lie in robotics, control, and mathematics, with a particular focus on reinforcement learning for robot motion control.', 'Through research projects and student competitions, I explore how control theory and learning algorithms can come together in robotic systems. I welcome conversations about research ideas and project experiences.'],
    contact: 'Get in touch ↗',
    research: [
      { title: 'Robot motion control', description: 'Robot motion modeling, trajectory tracking, and control algorithms.' },
      { title: 'Reinforcement learning', description: 'Exploring PPO and related methods for robot motion control.' },
      { title: 'Simulation & systems', description: 'Algorithm development and evaluation with ROS 2, MuJoCo, and Isaac Lab.' }
    ],
    projects: [
      { title: '6-DOF underwater grasping robot', kind: 'RESEARCH PROJECT', period: 'Since Feb 2026', description: 'Research on underwater robot motion control, including PID and PPO controller design and evaluation of 3D trajectory tracking using ROS 2 and simulation platforms.', tags: ['ROS 2', 'MuJoCo', 'Isaac Lab', 'PPO', 'PID'] },
      { title: 'National Undergraduate Intelligent Car Competition', kind: 'COMPETITION PROJECT', period: '2025', description: 'National First Prize. Responsible for vision-based line following, motion control system development, and deployment of a YOLO object detection model.', tags: ['Visual navigation', 'Motion control', 'YOLO', 'Ubuntu'] }
    ],
    experience: [
      { period: '2024 / 2025', title: 'National Scholarship', description: 'Awarded the National Scholarship in two consecutive years.' },
      { period: '2025', title: 'National First Prize · Intelligent Car Competition', description: 'Contributed to vision algorithms and motion control systems.' },
      { period: '2025—2026', title: 'Course teaching assistant · Excellent TA', description: 'Teaching assistant for Fundamentals of Control Theory and Mechanical Drawing.' }
    ],
    education: { title: 'Chongqing University', description: 'Robotics Engineering · School of Mechanical and Vehicle Engineering', degree: 'Undergraduate' }, skills: 'TOOLS & SKILLS', backTop: 'Back to top ↑'
  }
};
