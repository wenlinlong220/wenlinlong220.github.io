---
title: "6-DOF Underwater Grasping Robot Development"
date: 2024-03-30
type: "Research Project"
icon: "🤖"
duration: "Feb 2026 - Present"
status: "active"
tech_stack: ["ROS2", "Mujoco", "Isaac Lab", "PPO Algorithm", "PID Control"]
---

# 6-DOF Underwater Grasping Robot Development

## 项目概述

基于ROS2和Mujoco/Isaac Lab平台的六自由度水下抓取机器人运动控制系统设计，实现高鲁棒性的三维轨迹跟踪。

## 技术实现

### PID控制系统设计
- 在Mujoco仿真平台上基于ROS2完成PID控制系统设计
- 对机器人独特的"2舵机+4螺旋桨"可倾斜桨叶耦合系统进行解析逆解
- 设计了能够实现低误差三维曲线跟踪的运动学逆解求解器

### 基于PPO的运动控制系统设计
- 在Isaac Lab平台上使用PPO算法，配合合理设计的机器人运动奖励函数
- 实现从目标到体坐标系下广义力的控制
- 结合运动学逆解求解器计算舵机角度和螺旋桨推力，实现高鲁棒性运动控制

## 研究进展

相关论文正在准备中...