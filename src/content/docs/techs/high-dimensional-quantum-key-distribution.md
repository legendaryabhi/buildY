---
title: High Dimensional Quantum Key Distribution using a Spin Orbit Microlaser 
description: HD-QKD system enabled by integrated emission of coherent spin-orbit photonic qudits.
---

### Idea Proposed

![Image](https://github.com/user-attachments/assets/81268503-1158-466a-a475-2dcd4a7c95e9)

> FIG. 1. HD-QKD system enabled by integrated emission of coherent spin-orbit photonic qudits. (a) Schematic of the proposed HD QKD system. The transmitter (left), built upon a III/V spin-orbit microlaser, emits four-dimensional spin-orbit photonic qudits into a quantum channel. The qudits are analyzed at the receive side (right) by a mode sorter and detected by a SPAD. (b) Illustration of the III/V spin-orbit microlaser design. The whole device consists of two microring resonators, each equipped with an angular grating along the inner sidewall [36,37], and four active-material spiral-shaped waveguides providing strong non-Hermitian gauged couplings between the four lasing eigenmodes. The left ring features a HOPS composed of jþ2;↑i and j−2;↓i, and the right ring features another HOPS composed of j−2;↑i and jþ2;↓i. With tunable pumping onto the four waveguides, different non-Hermitian gauges can be applied to manipulate each HOPS and the coupling between two HOPS, thus supporting arbitrary, coherent, 4D qudits emission within the Hilbert space spanned by j1i¼jþ2;↑i, j2i¼j−2;↓i, j3i¼j−2;↑i, and j4i¼jþ2;↓i. (c) Depiction of secret key distribution flow of the 4D BB84 protocol. Alice randomly generates a sequence of 4D bits and MUBs to emit the corresponding 4D spin-orbit qudits to Bob. Bob also randomly chooses a sequence of MUBs to detect the incoming photons. After creating and detecting all the spin-orbit photons, Alice and Bob publicly announce the MUBstheyused, discard anyunmatched or undetected photons, and keep the remaining 4D bits as the secret key shared by each other. The optical field distributions of all eight qudit states have the same spatial-temporal structures, indicating that they propagate with the same phase and group velocities, which eliminate dephasing and walk-off problems throughout the distribution. The color and the transparency represent the wavefront phase and intensity, respectively.

<br>
<br>


The system uses:
- **Spin-orbit microlasers** to generate high-dimensional quantum states (qudits).
- **Non-Hermitian optics** for more compact, energy-efficient photon manipulation.
- **Decoy-state protocols** to enhance security against eavesdroppers.

## **How It Works**
### **1. High-Dimensional Quantum Key Distribution (HD-QKD)**
- Traditional QKD uses qubits (2D states), limiting information capacity to 1 bit per photon.
- Qudits (N-dimensional states, where N > 2) can encode **log₂N bits per photon**, improving efficiency and noise resistance.
- The document describes a **4D spin-orbit qudit system** based on **polarization and orbital angular momentum (OAM)**.

### **2. Spin-Orbit Microlaser QKD Protocol**
- **Alice** (the sender) generates qudits using a microlaser.
- The microlaser emits photons with four spin-orbit eigenstates, ensuring stable quantum transmission.
- **Bob** (the receiver) detects these qudits using a spin-orbit mode sorter and a single-photon avalanche diode (SPAD).
- A **high-dimensional BB84 protocol** is used, where Alice and Bob choose random measurement bases and sift keys based on matching bases.
- **Decoy-state methods** protect against photon-number splitting attacks.

### **3. Advantages Over Conventional QKD**
- **Higher Information Capacity**: Qudits encode more bits per photon than qubits.
- **Noise Resilience**: The system has a lower Quantum Bit Error Rate (QBER) than qubit-based QKD.
- **Compact and Energy Efficient**: The microlaser system is **smaller and consumes less power** than bulk optical setups.
- **Long-Distance Transmission**: Can operate over **distances up to 112 km** in free-space communication and **potentially 500 km** with improved photon detectors.

## **How to Use or Implement It**
### **1. Building a Secure Quantum Communication Network**
- Deploy **microlaser-based quantum transmitters** for encoding and sending qudit-based quantum keys.
- Use **spin-orbit mode sorters and single-photon detectors** to receive and decode the transmitted qudits.
- Implement **high-dimensional BB84 protocol** with decoy-state security enhancements.

### **2. Integrating with Existing Quantum Networks**
- Quantum networks (e.g., **ground-to-satellite QKD links**) can use **microlaser-based HD-QKD** for better efficiency and security.
- **Fiber-optic networks** can benefit from higher-dimensional encoding, reducing key loss due to noise.

### **3. Potential Applications**
- **Government & Military**: Ultra-secure communications.
- **Banking & Finance**: Preventing cyberattacks on transactions.
- **Internet & Cloud Security**: Protecting sensitive data transmission.
- **Quantum Internet**: Laying the foundation for global quantum-secure communications.

### Sources & citation

> High-Dimensional Quantum Key Distribution by a Spin-Orbit Microlaser- DOI: https://doi.org/10.1103/PhysRevX.15.011024
