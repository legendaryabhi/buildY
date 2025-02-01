---
title: Tensor Networks in Fluid Dynamics for Cost Reduction
description: Tensor networks (TNs) allow a compressed representation of turbulence PDFs, avoiding the need to store the entire grid.
---


### **1. The Problem: Challenges in Fluid Dynamics**
Fluid dynamics, especially **turbulent flow modeling**, is extremely computationally expensive due to:
- **Multiscale nature**: Turbulence involves eddies of various sizes interacting with each other.
- **High-dimensional equations**: The state of a turbulent flow is described by the **Navier-Stokes equations**, which are nonlinear partial differential equations (PDEs).
- **Exponential complexity**: To accurately resolve turbulence, traditional methods need \( M^d \) grid points, where:
  - \( M \) is the number of discretization points per dimension.
  - \( d \) is the number of dimensions (velocity, position, time, chemical composition, etc.).
  - In practical cases, \( d \) can be **1000 or more**, making simulations intractable.

### **Traditional Methods in Fluid Dynamics**
1. **Direct Numerical Simulation (DNS)**  
   - Solves the **Navier-Stokes equations** directly but is computationally infeasible for high Reynolds numbers.
   - Scales as **\( O(M^d) \)** in memory and computation.

2. **Large Eddy Simulation (LES)**  
   - Simulates only large turbulence scales, modeling small ones.
   - Still computationally expensive and requires **subgrid-scale models**.

3. **Monte Carlo (MC) Methods**  
   - Uses random sampling to estimate turbulence properties.
   - **Slow convergence**, requiring many samples for accuracy.

### **Tensor Network Approach**
Instead of simulating every detail of turbulence, the method in the paper **compresses turbulence probability distributions** into a **tensor network representation**, drastically reducing complexity.


## **2. The Solution: Tensor Networks for Fluid Dynamics**
### **2.1. Reformulating Fluid Dynamics as a Probability Distribution**
- Instead of tracking **exact** fluid velocities and pressures, we model the **probability density function (PDF)** of flow variables.
- The **Fokker-Planck equation** describes the evolution of these PDFs:
  
  $$
  \frac{\partial f}{\partial t} + \langle U_i \rangle \frac{\partial f}{\partial x_i} - \frac{\partial}{\partial x_i} \left( (\gamma + \gamma_{SGS}) \frac{\partial f}{\partial x_i} \right) = \frac{\partial}{\partial \phi_{\alpha}} \left( \Omega_{mix} (\phi_{\alpha} - \langle \Phi_{\alpha} \rangle) f \right) - \frac{\partial}{\partial \phi_{\alpha}} \left( S_{\alpha} f \right)
  $$

  where:
  - \( f(x,t) \) = joint probability density function of turbulence.
  - \( U_i(x,t) \) = velocity components.
  - \( \phi_{\alpha} \) = mass fraction of chemical species.
  - \( \gamma, \gamma_{SGS} \) = diffusion coefficients (molecular and subgrid-scale).
  - \( S_{\alpha} \) = reaction terms.

- The **curse of dimensionality** makes solving this PDE directly infeasible using standard finite-difference (FD) methods.


### **2.2. How Tensor Networks Solve This**
**Tensor networks (TNs)** allow a compressed representation of turbulence PDFs, avoiding the need to store the entire \( M^d \) grid.
- Instead of storing **\( M^d \) points**, we approximate the PDF using a **Matrix Product State (MPS)** tensor network:

```math
  f(\phi_1, \phi_2, x, t) = \sum_{\{i\}} A^{[1]}_{i_1} A^{[2]}_{i_2} ... A^{[N]}_{i_N}
```

  - \( A^{[n]}_{i_n} \) are tensors representing interactions between different variables.
  - The compression is controlled by the **bond dimension \( \chi \)**.
  - Instead of needing \( M^d \) storage, TNs only require **\( O(d \log M) \)** storage.

### **Key advantages:**
1. **Computational Cost Reduction**  
   - Finite-difference schemes scale as **\( O(M^d) \)**.  
   - Tensor networks scale as **\( O(d \log M) \)**.  
   - This means **memory and computational cost reduction by factors of \( O(10^6) \) and \( O(10^3) \), respectively**.

2. **High Accuracy Without Monte Carlo Noise**  
   - Unlike Monte Carlo methods, tensor networks directly solve equations **without randomness**.
   - Faster convergence.

3. **Runs on Classical Computers**  
   - Unlike quantum computing algorithms, this method **only requires classical CPUs**.
   - Feasible for industrial and research applications **without a supercomputer**.
   - 

## **3. Proof of Efficiency in Fluid Dynamics**
The study demonstrates the power of this method through simulations of **reactive turbulent flows**, where two chemical species mix and react.

### **3.1. Benchmark Against Traditional Methods**
- **Test Case:** 5D turbulence PDF simulation of a chemically reactive jet.
- **Computational Cost Comparison:**
  - **Finite Difference (FD) Scheme:** Would require **\( 128^5 = 33.6 \) billion grid points**.
  - **Tensor Network (MPS) Scheme:** Uses only **\( O(10^5) \) parameters**, a **\( 10^6 \) reduction in memory**.
  - **Time Complexity:** Reduced from **\( O(M^d) \)** to **\( O(d \log M) \)**.

### **3.2. Accuracy and Convergence**
- The **root mean square error (RMSE)** analysis shows that the MPS method converges **polynomially with bond dimension \( \chi \)**.
- Even at low bond dimensions (e.g., \( \chi = 32 \)), the MPS simulation provides results **indistinguishable from DNS**.

### **3.3. Example Application: Jet Mixing**
- A **turbulent jet with chemical reactions** was simulated.
- The **MPS representation** correctly captured:
  - Turbulent mixing behavior.
  - Chemical species distributions.
  - Probability density evolution.

### Sources & citation

> Tensor networks enable the calculation of turbulence probability distributions: https://www.science.org/doi/10.1126/sciadv.ads5990
