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

# 全国大学生智能汽车竞赛完全模型组

## 项目概述


项目需要参赛者设计自己的车模外壳，运用官方提供的I车模的结构搭建自己的车模。
整车分为上位机和下位机，上位机采用Edgeboard，下位机采用TC264，另外采用百度提供的框架进行YOLO模型的训练以识别路径上的特殊元素和路段。车模需要在形式的过程中行驶过急转弯、S弯、环岛和十字路口等复杂路段，除此之外，还需要避让路上的行人和路障，并在临时停车区、充电区以及餐饮区完成相应的任务，并且最终能够到达终点。本人在项目中最主要负责的部分是上位机视觉代码的内容，在技术实现中有具体解释，除此之外也涉及其他的部分内容。

[第20届全国大学生智能汽车竞赛完全模型组规则](https://blog.csdn.net/zhuoqingjoking97298/article/details/143958024)

## 技术实现

### 视觉与上层运动控制系统

  - 在Ubuntu18.04系统上使用八邻域算法实现实时循迹
  - 设计了高度自适应的转弯算法
  - 实现了锥桶、行人、路障等障碍物的避障功能
  - 对临时停车区和十字路口进行识别和实时策略调整

### 下层运动控制

  - 下位控制的PID算法和调试
  - 实现了精准的速度控制和位置控制

### 系统集成

  - 通过SSH和VNC进行远程控制和调试
  - 在赛道上部署YOLO模型进行特殊元素识别

## 相关资料
这是我根据当时一门课程的报告修改技术文档，其中一些内容可能不完全符合实际，但大致思路可以参考。

[完全模型组部分讲解.pdf](/projects/smartcar/完全模型组部分讲解.pdf) - 比赛技术讲解文档