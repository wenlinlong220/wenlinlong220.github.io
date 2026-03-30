---
title: "6-DOF Underwater Grasping Robot Development"
date: 2024-03-30
type: "Research Project"
icon: "🤖"
duration: "Feb 2026 - Present"
status: "active"
tech_stack: ["ROS2", "Mujoco", "Isaac Lab", "PPO Algorithm", "PID Control"]
links:
  - name: "运动学正反解资料"
    icon: "📄"
    url: "/projects/underwater-robot/运动学正反解.pdf"
---

# 6-DOF Underwater Grasping Robot Development

## 项目概述

基于ROS2和Mujoco/Isaac Lab平台的六自由度水下抓取机器人运动控制系统设计，实现高鲁棒性的三维轨迹跟踪。

---

## 技术实现

### PID控制系统设计

- 在Mujoco仿真平台上基于ROS2完成PID控制系统设计
- 对机器人独特的"2舵机+4螺旋桨"可倾斜桨叶耦合系统进行解析逆解
- 设计了能够实现低误差三维曲线跟踪的运动学逆解求解器

### 基于PPO的运动控制系统设计

- 在Isaac Lab平台上使用PPO算法，配合合理设计的机器人运动奖励函数
- 实现从目标到体坐标系下广义力的控制
- 结合运动学逆解求解器计算舵机角度和螺旋桨推力，实现高鲁棒性运动控制

---

## 相关资料

[运动学正反解.pdf](/projects/underwater-robot/运动学正反解.pdf) - 机器人运动学正反解技术文档

---

## 研究进展

相关论文正在准备中...

---

## 全驱动四旋翼水下机器人仿真平台概述

### 平台基本信息

- **隶属**：重庆大学-机械与运载工程学院
- **仿真环境**：采用mujoco和ROS2进行仿真，仿真环境为ubuntu22.04
- **编程语言**：主要采用C++和Python代码，其中与实际机体相关的内容主要采用C++，纯粹与仿真相关的内容采用Python

### 文件架构

#### 1. 源代码结构

- `src` 中存放了功能包
- 对于一个功能包 `pkg`：
  - C++代码存放在其 `src` 目录下
    - `Lib` 代表库函数，也就是该节点所使用的所有工具函数
    - `node` 代表节点，也就是节点本身
  - `Include` 存放 `.hpp` 头文件，引用和声明在此处
  - 对于C++功能包，存在 `CMakeLists.txt` 文件，一个功能包基本对应一个
  - 与功能包重名的为python代码所在文件夹

#### 2. 资源文件

- `res` 中存放资源
- `sw2mujoco` 中的内容是SolidWorks中转Mujoco的 `.xml` 文件的内容，包括脚本，以及 `.stl` 格式的模型

---

### 功能包说明

#### 1. `control_pkg`：整个控制系统实现，运动学正反解过程

- **input**：传感器信息，手柄所给的前馈量
- **output**：四个推进器以及舵机的打角

#### 2. `joy_pkg`：实现手柄映射控制，以及控制量可视化，给予控制系统前馈量

- **input**：手柄信息，不需要额外打开其他节点
- **output**：控制系统的前馈量，包括位姿，速度，加速度

#### 3. `mujuco_pkg`：实现仿真平台基础搭建，引入模型

- **input**：控制器输出的各个推进器的力大小
- **output**：仿真环境

#### 4. `uuv_function`：水下无人机的各种整合功能实现

- 例如在仿真平台中利用手柄进行闭环控制
- 存放所有launch文件

---

### 操作指南

#### 1. 进入工作空间

```bash
cd /home/"你的工作空间名字"/UUV_CQU_MUJOCO/
```

#### 2. 编译代码

在工作空间目录下编译即可，采用ROS2特有的编译方法：

```bash
colcon build
```

#### 3. 设置环境变量

每次打开终端要提前设置好，在工作空间目录下执行：

```bash
source install/setup.bash
```

#### 4. 启动仿真

例如启动launch文件：

```bash
ros2 launch uuv_function close_loop_joy_control.launch.py 
```

---

### 注意事项

1. **机器人异常运动**：如果发现机器人乱动，重启启动Launch文件即可

2. **控制模式设置**：在 `src/mujoco_pkg/mujoco_pkg/mujoco_simulator_node.py` 中有如下一段代码：

   ```python
   body_control = True  # True: 机体空间控制；False: 接收驱动空间控制
   ```

   - 如果利用机体系控制，那么设置 `True`
   - 如果利用驱动空间的推进器控制，那么设置 `False`

   目前已经可以使用，对于推进器的几个矢量推进，只是简单的把力按照力乘以sin、cos这样分配来模拟矢量控制，因为貌似mujoco里面有点奇怪，舵机旋转会影响本体的运动，暂时只能先这么处理。

3. **手动调试**：如果需要手动调试，在mujoco里面调试各个驱动器方向之类的，找到如下代码注释即可：

   ```python
   with self.control_lock:
      self.data.ctrl[:] = self.control_data  # 具体多少更新了在data体现，ctrl只管更新data中的内容
   ```

---

### 需要提前了解的知识

- **姿态表达方法**：例如四元数，欧拉角，齐次矩阵等，以及他们的相互转换
- **四旋翼控制架构**：简单了解一下四旋翼的一个控制架构，我们因为是6对6的一个控制，所以其实本身可以姿态位置并行控制
- **机器人奇异位形**：了解一下机器人奇异位形的定义
