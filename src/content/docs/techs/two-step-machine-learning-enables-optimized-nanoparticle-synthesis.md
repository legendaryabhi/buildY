---
title: Two-step machine learning enables optimized nanoparticle synthesis
description: By integrating high-throughput microfluidic experiments with advanced machine learning, the framework is able to explore and optimize the synthesis conditions.
---

A two-step machine learning framework that drives the optimization of nanoparticle synthesis on a microfluidic platform.

By integrating high-throughput microfluidic experiments with advanced machine learning, the framework is able to explore and optimize the synthesis conditions. The overall goal is to adjust the reaction parameters until the produced nanoparticles display a target absorbance spectrum that corresponds to a desired nanoparticle shape and size.  

### How It Works
1. **Step 1 – Bayesian Optimization (BO):**  
   - **Sparse Data Sampling:** Initially, the system uses a droplet-based microfluidic platform where experimental conditions (like flow rates of various reactants) are controlled.
   - **BO with Gaussian Process:** A Bayesian optimization algorithm (using a Gaussian Process surrogate model) is applied to the limited initial dataset to suggest experimental conditions that move the measured absorbance spectrum closer to a pre-defined target.
   - **Loss Function Evaluation:** Each experiment’s optical spectrum is compared to the target using a loss function that captures differences in both spectral shape and intensity.

2. **Step 2 – Deep Neural Network (DNN) Regression:**  
   - **Data Accumulation and Training:** Once enough data has been collected from BO-guided runs, a deep neural network is trained to predict the full UV–Vis absorbance spectrum from the input synthesis parameters.
   - **Grid Search Optimization:** With the DNN in place, the framework performs a grid search over the parameter space to propose new synthesis conditions that minimize the loss function even further.
   - **Iterative Feedback Loop:** The process continuously refines the model predictions and experimental conditions. This two-step approach not only optimizes the nanoparticle synthesis but also extracts interpretable insights about which process variables most significantly affect the outcome.

### How You Can Implement This
- **Experimental Setup:**  
  - Develop a droplet-based microfluidic platform capable of precisely controlling flow rates for different reagents.  
  - Integrate an inline UV–Vis spectrometer to measure the optical properties (absorbance spectrum) of each droplet containing the synthesized nanoparticles.

- **Data Collection:**  
  - Start by running a series of experiments to collect initial data on how variations in synthesis conditions (e.g., concentrations of silver nitrate, seed particles, trisodium citrate, etc.) affect the absorbance spectrum.

- **Machine Learning Integration:**  
  - **Initial Phase with BO:** Implement Bayesian Optimization (using tools/libraries that support Gaussian Processes) to efficiently sample the parameter space and suggest promising experimental conditions based on a defined loss function comparing the measured and target spectra.
  - **DNN Phase:** As your dataset grows, train a deep neural network to serve as a surrogate model that can predict the full absorbance spectrum from the reaction parameters.
  - **Grid Search:** Use the trained DNN to conduct a grid search over the experimental parameters, identifying conditions that minimize the loss function.
  - **Iterative Loop:** Continuously feed new experimental data back into the BO and DNN models, refining the predictions and pushing the system toward the desired nanoparticle characteristics.

- **Knowledge Extraction:**  
  - Utilize interpretability tools (like SHAP) to analyze which parameters most influence the nanoparticle properties. This can provide actionable insights for further process optimization and even guide inverse design efforts for different targets.

- **Practical Tools and Resources:**  
  - Consider using open-source libraries for Bayesian Optimization (such as GPyOpt) and deep learning frameworks (like TensorFlow or PyTorch).  
  - The authors provide code and data in an online repository (links are provided in the paper), which can serve as a starting point for your implementation.


### Sources & citation

> Mekki-Berrada, F., Ren, Z., Huang, T. et al. Two-step machine learning enables optimized nanoparticle synthesis. npj Comput Mater 7, 55 (2021). https://doi.org/10.1038/s41524-021-00520-w
