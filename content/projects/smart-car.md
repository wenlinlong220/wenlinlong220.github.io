---
title: "National Undergraduate Intelligent Car Competition"
date: 2024-03-30
type: "Competition Project"
icon: "🏎️"
duration: "2025"
status: "completed"
tech_stack: ["Ubuntu", "Eight-neighborhood Algorithm", "PID Control", "YOLO", "SSH/VNC"]
links:
  - name: "比赛资料下载"
    icon: "📄"
    url: "/projects/smartcar/完全模型组部分讲解.pdf"
---

# National Undergraduate Intelligent Car Competition - National First Prize

## 项目概述

全国大学生智能汽车竞赛（完全模型组）国家级一等奖项目。

## 技术实现

### 视觉与上层运动控制系统
- 在Ubuntu18.04系统上使用八邻域算法实现实时循迹
- 设计了高度自适应的转弯算法
- 实现了锥桶、行人、路障等障碍物的避障功能
- 对临时停车区和十字路口进行识别和实时策略调整

### 下层运动控制
- 后轮驱动电机的PID算法设计与调试
- 实现了精准的速度控制和位置控制

### 系统集成
- 通过SSH和VNC进行远程控制和调试
- 在赛道上部署YOLO模型进行特殊元素识别

## 相关资料

[完全模型组部分讲解.pdf](/projects/smartcar/完全模型组部分讲解.pdf) - 比赛技术讲解文档