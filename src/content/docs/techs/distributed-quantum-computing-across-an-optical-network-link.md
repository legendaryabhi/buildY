---
title: Distributed quantum computing across an optical network link
description: Entanglement is heralded between network qubits through the interference of photons on beam splitters.
---

### Idea Proposed

![Image](https://github.com/user-attachments/assets/375a6e4f-20d3-4f33-884b-7ee45ddd97f2)

> a, Schematic of a DQC architecture comprising photonically interconnected modules. Entanglement is heralded between network qubits through the interference of photons on beam splitters. A photonic switchboard provides a flexible and reconfigurable network topology. b, The modules consist of at least one network qubit (purple) and at least one circuit qubit (orange), which may directly interact by means of local operations. QGT mediates non-local gate interactions (pink) between circuit qubits in separate modules. These protocols require the resources of shared entanglement, local operations and classical communication. c, A quantum circuit distributed across a network of small quantum processing modules that function together as a single, fully connected quantum computer.

<br>
<br>


## **Step-by-Step Explanation of How It Works**  

### **1. Setting Up the Quantum Network**  
Each **quantum processing module (QPM)** contains two types of qubits:  
- **Network qubits**: Responsible for entangling with qubits in other modules.  
- **Circuit qubits**: Used to perform quantum computations locally.  

These modules are connected using **photonic interconnects**, where **single photons** are used to generate **entanglement** between distant qubits.  

### **2. Creating Entanglement Between Remote Modules**  
- The network qubits in each module **emit photons**, which travel through an optical fiber.  
- These photons **interfere on a beam splitter**, creating **entangled qubit pairs** between the modules.  
- This **entanglement acts as a quantum link**, allowing information to be shared without physically moving qubits.  

### **3. Quantum Gate Teleportation (QGT)** – The Key to DQC  
Once **entanglement is established**, we can perform quantum operations across modules using **Quantum Gate Teleportation (QGT)**. Here's how:  

#### **Step 1: Prepare Circuit Qubits for Computation**  
- The **circuit qubits** in separate modules are initialized in the quantum states required for computation.  
- The **network qubits** remain entangled but are not directly involved in calculations.  

#### **Step 2: Apply a Local Quantum Gate on the Network Qubits**  
- A **local controlled-Z (CZ) gate** is applied between the **network qubit** and a **circuit qubit** in each module.  
- Since the network qubits are **already entangled**, this operation indirectly affects the remote circuit qubit.  

#### **Step 3: Measure the Network Qubits and Send Classical Information**  
- The network qubits are **measured** in a specific basis.  
- The measurement results are sent to the other module using a **classical communication channel**.  

#### **Step 4: Apply a Correction Operation**  
- Based on the received classical information, a **final correction (single-qubit rotation)** is applied to the remote circuit qubit.  
- This completes the teleportation of the quantum gate, effectively performing a **non-local quantum operation**.  

### **4. Running a Quantum Algorithm on a Distributed System**  
Once QGT is working, multiple two-qubit gates can be combined to execute a **full quantum algorithm** across multiple modules.  


## Implementation 
Implementation of this can be found in paper : Main, D., Drmota, P., Nadlinger, D.P. et al. Distributed quantum computing across an optical network link. Nature 638, 383–388 (2025). https://doi.org/10.1038/s41586-024-08404-x

### Sources & citation

> Main, D., Drmota, P., Nadlinger, D.P. et al. Distributed quantum computing across an optical network link. Nature 638, 383–388 (2025). https://doi.org/10.1038/s41586-024-08404-x