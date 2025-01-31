---
title: Teleportation of a quantum particle via quantum Zeno dynamics
description: Teleportation of a quantum particle in a potential is achieved using Quantum Zeno Dynamics (QZD).
---

Teleportation is theoretically possible by placing the particle initially at rest (with a certain uncertainty) out of any equilibrium point of a potential well or barrier and by frequently monitoring whether the particle remains at rest. This quantum Zeno dynamics inhibits acceleration, and features disappearance from the classical turning point and appearance in other turning point, if there is any other, with a probability that approaches unity by increasing the frequency of the measurements. 

This phenomenon has all the ingredients attributed in science fiction to teleportation: The particle is always at rest, cannot be found in the path between the two turning points, and saves travel time.

- Practical implementation of this method can be found in this paper: https://doi.org/10.48550/arXiv.2305.07968

## Method: Quantum Zeno Dynamics for Teleportation

Teleportation of a quantum particle in a potential is achieved using **Quantum Zeno Dynamics (QZD)**, where **frequent measurements** prevent acceleration and enable instantaneous relocation to another classical turning point.

### Initial State Preparation
- A quantum particle of mass **m** is placed **at rest** (with velocity uncertainty **Δv**) at a classical turning point of a potential well or barrier.
- The wave function is localized around **x₀**, ensuring that its initial velocity is close to zero.
- The system is designed so that another turning point **-x₀** exists, where teleportation will occur.


### Frequent Measurements to Induce Quantum Zeno Dynamics
- The particle's velocity is measured **N** times at intervals **Δt = T/N** within the total teleportation time **T**.
- Measurements check whether the particle remains in the velocity range **|v| < Δv**.
- These selective measurements prevent the particle from gaining momentum, effectively **freezing** its motion.


### Disappearance and Reappearance of the Particle
- Due to the **Quantum Zeno Effect**, the wave function avoids acceleration despite the force acting on it.
- The particle **disappears** from **x₀** and **reappears at -x₀**, without traversing the space between them.
- This behavior is mathematically supported by the lack of probability flux in the intermediate region.


### Teleportation Time Calculation**
The teleportation time **T_telep** depends on:

$$
T_{telep} = \frac{2mΔv}{|V'(x_0)|}
$$

- **m**: Mass of the particle
- **Δv**: Uncertainty in velocity
- **V'(x₀)**: Force at the turning point

As **N** increases, the teleportation probability approaches **1**, making the process effectively deterministic.


### Validating Teleportation via Probability Flux
- The **continuity equation** for probability is violated, confirming teleportation.
- The probability flux between **x₀** and **-x₀** is **zero**, meaning the particle does not physically move through the intermediate space.


## Conclusion
This method demonstrates **genuine teleportation** of a quantum particle, distinct from traditional entanglement-based quantum teleportation. While feasible for **electrons and light particles**, teleportation of heavier objects becomes impractical due to increasing measurement challenges.

## Sources & citation
> Teleportation of a quantum particle in a potential via quantum Zeno dynamic: https://doi.org/10.48550/arXiv.2305.07968