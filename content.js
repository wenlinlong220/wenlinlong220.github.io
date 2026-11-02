// 日常更新只需修改此文件。每条资料分别维护 zh（中文）和 en（英文）。
window.PROFILE = {
  zh: {
    name: '温麟陇', otherName: 'Wen Linlong', role: '机器人工程 · 本科在读', university: '重庆大学', school: '机械与运载工程学院', location: '中国 · 重庆',
    nav: ['关于我', '研究方向', '项目', '经历', '教育'],
    titles: ['关于我', '研究方向', '研究与项目', '荣誉与经历', '教育背景'],
    biography: ['你好，我是温麟陇，目前是重庆大学机器人工程专业本科生。计划于2027年赴浙江大学攻读机械电子工程博士学位。主要研究关于足式机器人的运动控制，尤其是基于强化学习的机器人运动控制。', '欢迎交流研究想法与经验。'],
    contact: '与我联系 ↗',
    research: [
      { title: '强化学习', description: ' 研究强化学习在足式机器人运动控制中的应用' },
      { title: '电液足式机器人', description: ' 尝试探索电液驱动的足式机器人的强化学习运动控制设计' }
    ],
    projects: [
      {
        "images": [
          {
            "src": "assets/underwater-control.png",
            "height": 866
          },
          {
            "src": "assets/underwater-learning.png",
            "width": 1557,
            "height": 851
          }
        ],
        "title": "六自由度水下抓取机器人研发",
        "kind": "国家级重点大创（重点支持领域）下属项目",
        "period": "2026.02 — 至今",
        "description": "面向水下狭小空间抓取任务，围绕“2 舵机—4 推进器”的机械构型，开展运动模式、三维轨迹跟踪与近端动态抓捕控制研究。",
        "tags": [
          "ROS 2",
          "MuJoCo",
          "MJLAB",
          "PPO",
          "MPC"
        ],
        "work": [
          {
            "title": "运动模式设计",
            "description": "参考车辆差动前进模式，针对该机械构型提出基于虚拟摩擦力的三维曲线跟踪方案。"
          },
          {
            "title": "MPC 与解析反解分层控制",
            "description": "基于 ROS 2 与 MuJoCo，设计并实现标称动力学 MPC 运动控制系统；针对耦合构型推导运动学解析反解，并采用 PD 滤波平滑解析解，实现三维空间曲线跟踪。"
          },
          {
            "title": "PPO 近端动态抓捕控制",
            "description": "基于 MJLAB，参考 MuJoCo 动力学算法，将水动力学仿真引入强化学习训练。采用 PPO，结合位姿—速度梯度下降耦合奖励函数与阶梯式课程学习，实现近端动态抓捕模式的运动控制，并完成策略网络的 Sim-to-Sim 迁移，避开传统控制架构结合解析反解时的舵角跳变、运动耦合及奇异位点问题。"
          }
        ]
      },
      { ...{"images":[{"src":"assets/smart-car-framework.png","width":1707,"height":904}],"links":[{"href":"assets/smart-car-award.pdf","label":"查看获奖证书"}]}, title: '全国大学生智能汽车竞赛-完全模型组', kind: '竞赛项目', period: '2025.02 - 2025.08', description: '获得全国一等奖，负责视觉循迹算法、运动控制系统搭建与 YOLO 目标检测模型部署。', tags: ['视觉循迹', '运动控制', 'YOLO', 'Ubuntu'] }
    ],
    experience: [
    ],
    education: [
  {
    title: '浙江大学',
    description: '机械工程学院 · 机械电子工程',
    degree: '博士阶段（计划）',
    period: '2027 起（计划）'
  },
  {
    title: '重庆大学',
    description: '机械与运载工程学院 · 机器人工程',
    degree: '本科在读',
    period: '2023 — 2027（预计）'
  }
],
  backTop: '返回顶部 ↑'
  },
  en: {
    name: 'Wen Linlong', otherName: '温麟陇', role: 'Undergraduate Student · Robotics Engineering', university: 'Chongqing University', school: 'School of Mechanical and Vehicle Engineering', location: 'Chongqing, China',
    nav: ['About Me', 'Research Interests', 'Projects', 'Experience', 'Education'],
    titles: ['About Me', 'Research Interests', 'Research & Projects', 'Honors & Experience', 'Education'],
    biography: ['Hello, my name is Wen Linlong. I am currently an undergraduate student in Robotics Engineering at Chongqing University. I plan to begin Ph.D. studies in Mechatronic Engineering at Zhejiang University in 2027. My research interests focus on legged robot motion control, particularly reinforcement learning for robot motion control.', 'I welcome conversations about research ideas and project experiences.'],
    contact: 'Get in touch ↗',
    research: [
      { title: 'Reinforcement Learning', description: ' Applying reinforcement learning to motion control for legged robots.' },
      { title: 'Electro-Hydraulic Legged Robots', description: ' Exploring reinforcement learning-based motion control for electro-hydraulically actuated legged robots.' }
    ],
    projects: [
      {
        "title": "6-DOF Underwater Grasping Robot Development",
        "kind": "Subproject of a National Key Undergraduate Innovation Project",
        "period": "Feb 2026 — Present",
        "description": "Motion planning, 3D trajectory tracking, and close-range dynamic grasping control for a compact underwater robot with two servomotors and four thrusters, designed for grasping in confined underwater spaces.",
        "tags": [
          "ROS 2",
          "MuJoCo",
          "MJLAB",
          "PPO",
          "MPC"
        ],
        "images": [
          {
            "src": "assets/underwater-control.png",
            "width": 1562,
            "height": 866
          },
          {
            "src": "assets/underwater-learning.png",
            "width": 1557,
            "height": 851
          }
        ],
        "work": [
          {
            "title": "Motion mode design",
            "description": "Proposed a virtual-friction-based 3D curve-tracking method for the robot’s mechanical configuration, drawing on differential-drive vehicle motion."
          },
          {
            "title": "Hierarchical MPC and analytical inverse kinematics",
            "description": "Designed and implemented a nominal-dynamics MPC controller using ROS 2 and MuJoCo. Derived analytical inverse kinematics for the coupled configuration and applied PD filtering to smooth the solutions for 3D curve tracking."
          },
          {
            "title": "PPO-based close-range dynamic grasping control",
            "description": "Integrated hydrodynamics into MJLAB reinforcement learning training, drawing on MuJoCo dynamics algorithms. Used PPO with a coupled pose–velocity reward incorporating gradient descent and a staged curriculum to control close-range dynamic grasping, and completed Sim-to-Sim policy transfer. This learning-based approach avoids the servo-angle discontinuities, motion coupling, and kinematic singularities encountered when combining conventional controllers with an analytical inverse solver."
          }
        ]
      },
      {
        title: 'National Undergraduate Intelligent Car Competition — Model Category', kind: 'Competition Project', period: 'Feb 2025 - Aug 2025',
        description: 'National First Prize. Responsible for vision-based line following, motion control system development, and deployment of a YOLO object detection model.',
        tags: ['Visual line following', 'Motion control', 'YOLO', 'Ubuntu'],
        images: [{ src: 'assets/smart-car-framework.png', width: 1707, height: 904 }],
        links: [{ href: 'assets/smart-car-award.pdf', label: 'View award certificate' }]
      }
    ],
    experience: [],
    education: [
      { title: 'Zhejiang University', description: 'School of Mechanical Engineering · Mechatronic Engineering', degree: 'Planned Ph.D. Studies', period: 'From 2027 (planned)' },
      { title: 'Chongqing University', description: 'School of Mechanical and Vehicle Engineering · Robotics Engineering', degree: 'Undergraduate (in progress)', period: '2023 — 2027 (expected)' }
    ],
    backTop: 'Back to top ↑'
  }
};
