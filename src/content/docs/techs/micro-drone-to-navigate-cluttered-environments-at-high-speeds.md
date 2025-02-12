---
title: Micro Drone to navigate cluttered environments at high speeds
description: The new micro drone, named **SUPER** (Safety-assured high-speed aerial robot), is designed to navigate cluttered environments at high speeds while ensuring safety.
---

### Idea Proposed

![Image](https://github.com/user-attachments/assets/7c8fefcb-8614-4e92-a75d-e0ae9b40e267)

> Overview of the proposed autonomous aerial system. (A) Radar chart comparing SUPeR with other state-of-the-art autonomous aerial robots, including the palm-sized autonomous MaV (ZJU Swarm) (35), the open-source agile quadrotor platform (agilicious) (33), and a representative commercial drone (27). For agilicious, we obtained thedata from its best performance in onboard autonomous flights as reported in (16). For the commercial drone, we obtained its size, tWR, and the maximum flight speed allowedby its aPaS from the official manufacturer’s website (27). the onboard computation power and safety strategy are not publicly disclosed and hence are not shown. (B) Demon-stration of SUPeR in real-world flights. (i) high-speed flights in the wild; (ii) avoidance of thin electrical wires; (iii) navigation through cluttered environments; (iv) flights at night.

<br>
<br>

The new micro drone, named **SUPER** (Safety-assured high-speed aerial robot), is designed to navigate cluttered environments at high speeds while ensuring safety. Here’s how it works and potential applications:

### **How It Works**
1. **Lightweight & High-Performance Design**  
   - SUPER has a **280mm wheelbase** and a **thrust-to-weight ratio (TWR) > 5.0**, making it highly agile.
   - Equipped with a **lightweight 3D LiDAR sensor**, which allows **long-range, high-accuracy** obstacle detection.

2. **Advanced Sensing & Mapping**  
   - Uses **LiDAR-based state estimation and mapping** instead of vision-based systems, ensuring robustness in low-light and cluttered environments.
   - The mapping system retains centimeter-level details, allowing it to avoid thin obstacles (e.g., power lines).

3. **Efficient Two-Trajectory Planning**  
   - It generates **two trajectories** in every planning cycle:
     - One in **known free space** to guarantee safety.
     - One in both **known and unknown spaces** to maximize speed.
   - This allows it to maintain both **safety and high-speed flight** better than previous methods.

4. **Real-World Performance**  
   - Achieved speeds **above 20 m/s** in unknown environments.
   - Reduced failure rates **by 35.9 times** compared to previous models.
   - Successfully navigated through **dense forests, narrow corridors, and even nighttime conditions**.

### **Potential Applications**

![Image](https://github.com/user-attachments/assets/62a40c04-55ce-4327-9f9f-d5b3284d37f3)
>  Additional applications of SUPER. Examples of object tracking including (A) tracking of a person running in a dense forest, (B) a dark indoor scene, (C) a large scene, and (D) a car moving on a hilly village road. (A)(i) and (D)(i) show the point cloud maps, which were synthesized from online LIDAR measurements after the flights were completed, with trajectories of the target and the MAV being colored in blue and red, respectively. (A)(ii) and (D)(ii) show snapshots in either third-person or first-person view during the experiments. (E) (i) Autonomous exploration experiment in a 50 m–by–60 m area with the executed trajectory of SUPER shown in the white path. (ii and iii) Snapshots of the scene and the corresponding reconstruction results, respectively. (F) Example of waypoint navigation. (i) The MAV starting from visited 11 waypoints, sequentially. The MAV trajectory is color coded on the basis of time. (ii) Time-lapse image composition capturing the changes in the environments and the flight trajectories of the MAV. The black artifacts are caused by the two persons moving randomly in the area, and the MAV trajectory is highlighted in blue. (iii to v) MAV flight trajectories at locations traveled by moving persons. SUPER can use the spaces previously traversed by moving objects.

- **Search & Rescue Missions** – Can quickly navigate debris and collapsed buildings.
- **Surveillance & Security** – High-speed patrolling in complex environments.
- **Autonomous Exploration** – Mapping unknown areas efficiently.
- **Disaster Response** – Navigating hazardous areas for reconnaissance.
- **Infrastructure Inspection** – Detecting structural weaknesses in hard-to-reach locations.

### Implementation paper:
Find that here: Yunfan Ren et al. ,Safety-assured high-speed navigation for MAVs.Sci. Robot.10,eado6187(2025).DOI:[10.1126/scirobotics.ado6187](https://doi.org/10.1126/scirobotics.ado6187)

### Sources & citation

> Yunfan Ren et al. ,Safety-assured high-speed navigation for MAVs.Sci. Robot.10,eado6187(2025).DOI:[10.1126/scirobotics.ado6187](https://doi.org/10.1126/scirobotics.ado6187)

> https://interestingengineering.com/innovation/micro-drone-unknown-terrain-high-speed
