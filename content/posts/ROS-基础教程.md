---
title: "ROS基础教程 - 机器人操作系统入门"
date: 2024-03-30
categories: ["tips"]
tags: ["ROS", "机器人", "Ubuntu", "C++", "Python"]
---

# ROS基础教程 - 机器人操作系统入门

## 什么是ROS

ROS（Robot Operating System）是一个用于机器人软件开发的框架，提供了一系列工具、库和约定，旨在简化创建复杂机器人行为的任务。

## ROS核心概念

### 1. 节点 (Nodes)
- ROS中的可执行程序
- 使用ROS客户端库编写
- 可以发布/订阅话题，提供/使用服务

### 2. 话题 (Topics)
- 节点间通信的通道
- 发布/订阅模式
- 异步通信

### 3. 消息 (Messages)
- 话题上传输的数据结构
- 使用.msg文件定义
- 支持基本类型和嵌套结构

### 4. 服务 (Services)
- 请求/响应模式的通信
- 同步通信
- 使用.srv文件定义

### 5. 参数服务器 (Parameter Server)
- 存储配置参数
- 所有节点可访问
- 支持动态重配置

## ROS安装与配置

### Ubuntu安装
```bash
# 设置ROS源
sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'

# 添加密钥
sudo apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654

# 安装ROS
sudo apt update
sudo apt install ros-noetic-desktop-full

# 环境配置
echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

## 创建工作空间

```bash
# 创建catkin工作空间
mkdir -p ~/catkin_ws/src
cd ~/catkin_ws/
catkin_make

# 配置环境
echo "source ~/catkin_ws/devel/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

## 创建第一个ROS包

```bash
# 进入src目录
cd ~/catkin_ws/src

# 创建包
catkin_create_pkg beginner_tutorials std_msgs rospy roscpp

# 编译
cd ~/catkin_ws
catkin_make
```

## 编写发布者节点 (Python)

```python
#!/usr/bin/env python3
import rospy
from std_msgs.msg import String

def talker():
    pub = rospy.Publisher('chatter', String, queue_size=10)
    rospy.init_node('talker', anonymous=True)
    rate = rospy.Rate(10)  # 10Hz
    
    while not rospy.is_shutdown():
        hello_str = "hello world %s" % rospy.get_time()
        rospy.loginfo(hello_str)
        pub.publish(hello_str)
        rate.sleep()

if __name__ == '__main__':
    try:
        talker()
    except rospy.ROSInterruptException:
        pass
```

## 编写订阅者节点 (Python)

```python
#!/usr/bin/env python3
import rospy
from std_msgs.msg import String

def callback(data):
    rospy.loginfo(rospy.get_caller_id() + "I heard %s", data.data)

def listener():
    rospy.init_node('listener', anonymous=True)
    rospy.Subscriber("chatter", String, callback)
    rospy.spin()

if __name__ == '__main__':
    listener()
```

## 常用工具

### 1. rqt
图形化工具套件，包括：
- rqt_graph：可视化节点和话题
- rqt_console：查看日志
- rqt_plot：绘制数据

### 2. RViz
3D可视化工具，用于：
- 显示传感器数据
- 可视化机器人模型
- 调试算法

### 3. Gazebo
物理仿真环境，用于：
- 机器人仿真
- 传感器仿真
- 环境建模

## ROS2简介

ROS2是ROS的下一代版本，主要改进：
- 支持实时系统
- 更好的跨平台支持
- 改进的通信机制（DDS）
- 更灵活的系统架构

## 学习资源

1. **官方文档**：http://wiki.ros.org
2. **ROS教程**：http://wiki.ros.org/ROS/Tutorials
3. **ROS Answers**：http://answers.ros.org
4. **GitHub仓库**：https://github.com/ros

## 实践建议

1. 从ROS1 Noetic开始学习
2. 多动手编写代码
3. 参与开源项目
4. 关注ROS社区动态
5. 逐步过渡到ROS2