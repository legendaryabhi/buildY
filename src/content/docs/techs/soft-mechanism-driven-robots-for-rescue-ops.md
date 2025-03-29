---
title: Soft mechanism driven Robots for Rescue OPS & Landmine Clearance
description: A soft-hybrid quadruped robot that uses multi-material 3D printing to blend soft and rigid materials.
---

### Idea Proposed

![Image](https://github.com/user-attachments/assets/ccfad11a-6ac5-46e2-82f0-f9b1c01860f5)

> Fig. 1 | Framework extending classical mechanism design to soft robotics. A Design process. Inspired by nature, we observe the walking trajectories of quadrupeds such as horses. We then select a trajectory from a four-bar atlas. We synthesize the corresponding linkage in the ideal design domain. Finally, we convert the linkage into a multi-material design by replacing ideal joints and links with variations of soft and hard materials. b Application. We assemble the printed parts and integrate the electronics into the robot body, creating a `soft mechanism driven robot`.

<br>
<br>

A **soft-hybrid quadruped robot** that:
- Uses **multi-material 3D printing** to blend **soft and rigid materials**.
- Achieves **efficient walking using four-bar linkages** instead of traditional pneumatic actuation.
- Can **traverse different terrains**, including **sand, soil, and rocks**.
- Has **impact resistance**, withstanding high forces while maintaining flexibility.
- Uses **low-cost thermoplastic polyurethanes (TPU) of different hardness levels**.
- Includes **closed-loop control with encoders and microcontrollers** for precise movement.


## **How These Robots Work**
### **1. Soft-Hybrid Design**
- The quadruped robot's **legs** are designed using a **four-bar mechanism**, allowing efficient movement similar to biological walking.
- **Soft joints** provide impact resistance, while **rigid links** ensure structural integrity.
- **Different TPU materials** (Shore hardness: 75D, 95A, and 85A) are used to **fine-tune flexibility**.

### **2. Actuation and Locomotion**
- Uses **DC motors with rotary actuators** instead of pneumatic actuators.
- The **four-bar linkage** moves in a **closed-curve trajectory**, reducing friction and improving energy efficiency.
- The **robot’s body oscillates**, mimicking animal movement for better stability.

### **3. Electronics and Control System**
- **Quadrature encoders** provide real-time feedback on motor rotation.
- A **custom PCB** integrates power and communication for **closed-loop control**.
- Uses a **microcontroller (potentially ESP32 or STM32)** for motor control and trajectory adjustments.

---

## **How to Build These Robots**
### **1. Materials & Components**
- **Multi-material 3D Printer** (FDM with a tool-changer for different TPU hardness levels).
- **Thermoplastic Polyurethanes (TPU)** of varying hardness:
  - **Soft joints** (85A TPU).
  - **Rigid links** (75D TPU).
- **DC motors** with **rotary encoders**.
- **Custom PCB for control**.
- **Microcontroller (ESP32, STM32, or Arduino)**.

### **2. Fabrication Process**
1. **3D Print the Robot Body & Legs**  
   - Use **multi-material FDM printing** to create flexible joints and rigid links in a single print.
   - Ensure strong adhesion between different materials.
  
2. **Assemble the Leg Mechanism**  
   - Attach **four-bar linkages** to the **DC motors**.
   - Use **dowel pins** to connect the crank link to the leg mechanism.

3. **Install Electronics**  
   - Solder **quadrature encoders** to track motor movement.
   - Connect the **DC motors to a microcontroller** via an H-Bridge motor driver.

4. **Program Motion Control**  
   - Implement **closed-loop control** using **PID algorithms**.
   - Define **walking gaits (trot, gallop, etc.)** in the microcontroller.

## **How to Implement These Robots**
### **1. Applications**
- **Search and Rescue**: Navigating through rubble and debris.
- **Agriculture**: Inspecting crops in uneven terrain.
- **Space Exploration**: Surviving harsh conditions with impact-resistant legs.
- **Medical Assistance**: Safe interaction with humans due to soft materials.

### **2. Enhancements & Future Work**
- **Flexible Electronics**: Avoiding rigid PCBs to improve overall softness.
- **AI-based Adaptive Locomotion**: Using cameras and sensors for terrain adaptation.
- **Wireless Communication**: Controlling the robot remotely via Wi-Fi or Bluetooth.


### Sources & citation

> Aygül, C., Güven, C., Frunzi, S.A. et al. A framework for soft mechanism driven robots. Nat Commun 16, 1426 (2025). https://doi.org/10.1038/s41467-025-56025-3