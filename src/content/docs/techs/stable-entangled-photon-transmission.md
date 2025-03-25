---
title: Stable Entangled Photon Transmission for 30+ Hours
description: An automatic polarization compensation (APC) system that continuously corrects for these drifts, stabilizing quantum entanglement over long distances and durations.
---
### Idea Proposed

### **Continuous Entanglement Distribution Over Fiber Networks**  
- **Challenge**: Quantum networks rely on **polarization-encoded entanglement**, but environmental factors (temperature changes, fiber stress, etc.) cause **polarization drift**, disrupting entanglement.  
- **Solution**: An **automatic polarization compensation (APC) system** that continuously corrects for these drifts, **stabilizing quantum entanglement over long distances and durations**.  
- **Impact**: This system enables **stable quantum communications**, a key requirement for **quantum cryptography, secure data transmission, and the quantum internet**.

### **How It Works**  
#### **1. Automatic Polarization Compensation (APC) System**  
- Uses **dim reference signals** (low-power classical light) alongside the quantum signals in **wavelength-multiplexed channels**.  
- Reference signals continuously **monitor polarization drift** in the fiber and adjust it in real time using **fiber squeezers or liquid crystal retarders**.  
- A **heterodyne detection system** extracts polarization information from reference signals, feeding it into a **multi-axis PID control loop** that applies corrections.  
- **Result**: Stable polarization transformation, ensuring that quantum entanglement remains intact **for over 30 hours** without downtime.

#### **2. Quantum Entanglement Distribution**  
- The system transmits **polarization-entangled photons** through a **metropolitan-scale quantum network**.  
- An **entangled photon source** generates pairs of photons with correlated quantum states.  
- One photon is sent through a fiber link with the **APC system**, while the other is used as a reference for quantum state measurement.  
- **High-fidelity quantum state tomography** confirms that **entanglement is preserved over long durations and distances**.

#### **3. Key Innovations**  
- **No downtime**: Unlike traditional compensation methods, which periodically pause for recalibration, this system continuously operates.  
- **Minimal added noise**: The reference signals are designed to **avoid interference with quantum signals**, maintaining high-fidelity entanglement.  
- **Multi-wavelength compatibility**: Works across the **C-band and L-band fiber-optic channels**, making it versatile for real-world quantum networking.  

### **How We Can Implement It**  
#### **1. Scaling Up Quantum Networks**  
- Deploying **automatic polarization compensation** in **quantum fiber networks** allows stable entanglement transmission over city-scale or intercontinental distances.  
- Could be used in **satellite-to-ground quantum communication**, where polarization fluctuations due to atmospheric effects are a challenge.  

#### **2. Secure Quantum Cryptography**  
- Enables **continuous quantum key distribution (QKD)** for **unbreakable encryption** in banking, defense, and secure communications.  
- Improves **entanglement-based QKD** by **eliminating polarization drift**, ensuring stable key generation rates.  

#### **3. Quantum Cloud Computing & Distributed Quantum Processing**  
- Can be used for **linking remote quantum computers** in a scalable, error-resistant quantum cloud network.  
- Essential for building a **fault-tolerant quantum internet**, where quantum information is transferred reliably between different quantum processing nodes.  


### Sources & citation

> Joseph C. Chapman, Muneer Alshowkan, Kazi Reaz, Tian Li, and Mariam Kiran, "Continuous automatic polarization channel stabilization from heterodyne detection of coexisting dim reference signals," Opt. Express 32, 47589-47619 (2024)