---
title: Biologically Plausible Model for Nonlinear Dimensionality Reduction
description: The olfactory system in Drosophila provides a real-world model for dimensionality reduction.
---

### Idea Proposed

![Image](https://github.com/user-attachments/assets/2f24e8c8-45aa-46e4-b8ce-dccab60e9598)

> Model structure of the Hebbian t-SNE. (A) Three-layer feedforward model including the input layer X, the middle layer Z, and the output layer Y. The transformation from X to Z is fixed. The synaptic weight matrix W from the middle to output layers is plastic, regulated by the presynaptic and postsynaptic neurons and global factor  D. The global factor D is determined by x̂ diff and ŷ diff that calculate input and output similarities, respectively. The input similarity x̂ diff is based on the input difference  ∥X(t) − X(t − 1)∥2 and axonal signal a from the middle layer. (B) Hypothetical elements implementing Hebbian t-SNE in the Drosophila olfactory circuit

<br>
<br>

## **Why Dimensionality Reduction Matters**
Our sensory systems receive **high-dimensional data**—visual, auditory, and chemical signals—that must be processed efficiently. The brain transforms this complex input into **low-dimensional representations** that drive behavior. In artificial intelligence, dimensionality reduction helps with:
- **Data Visualization**: t-SNE and UMAP (Uniform Manifold Approximation and Projection) make high-dimensional data understandable.
- **Feature Extraction**: Reducing redundant information while preserving critical patterns.
- **Improved Learning**: Simplifies downstream processing for AI and machine learning models.

## **The Biological Inspiration**
The **olfactory system in Drosophila** provides a real-world model for dimensionality reduction. It consists of three key layers:
1. **Projection Neurons (PNs) → Input Layer (X)**: Receives raw sensory input.
2. **Kenyon Cells (KCs) → Middle Layer (Z)**: Expands data into a high-dimensional, sparse representation.
3. **Mushroom Body Output Neurons (MBONs) → Output Layer (Y)**: Reduces data back to a **low-dimensional form** for decision-making.

This structure is remarkably similar to **neural networks** used in machine learning, making it a natural candidate for biologically plausible AI.

## **How Hebbian t-SNE Works**
Unlike traditional t-SNE, which relies on **gradient descent**, Hebbian t-SNE leverages **three-factor Hebbian learning**, a biologically inspired rule for synaptic plasticity. The process consists of three main steps:

### **Step 1: Compute Input Similarities**
- High-dimensional input data (X) is analyzed to determine similarities.
- Similarity is measured using a **Gaussian function**, ensuring that close points are weighted more heavily.

### **Step 2: Compute Output Similarities**
- The low-dimensional representation (Y) is adjusted to match the input structure.
- Instead of a Gaussian, t-SNE uses a **t-distribution**, preventing the "crowding problem."

### **Step 3: Adjust Synaptic Weights Using Hebbian Learning**
- The network updates connections based on **three-factor Hebbian plasticity**:
  - **Presynaptic activity (Z)**
  - **Postsynaptic activity (Y)**
  - **A global modulatory signal (D), similar to dopamine**
- The rule strengthens connections between neurons that fire together, leading to **self-organized clustering** of similar data points.

## **Key Advantages of Hebbian t-SNE**
**Unsupervised Learning** – No labeled data required.
**Biologically Plausible** – Mimics real neural circuits.
**Works for Nonlinear Data** – Captures hidden structures beyond PCA.
**Supports Real-Time Learning** – Can handle streaming data.
**Dopaminergic Modulation** – Incorporates neuromodulatory control for adaptive learning.

## **Applications and Future Implications**
🚀 **Neuroscience**: Understanding brain function and sensory processing.
🚀 **AI & Machine Learning**: Creating more biologically inspired models.
🚀 **Robotics**: Enhancing perception and decision-making in autonomous systems.
🚀 **Data Science**: Providing new ways to visualize and cluster high-dimensional datasets.

## **How Hebbian t-SNE Differs from Traditional t-SNE**
| Feature | Traditional t-SNE | Hebbian t-SNE |
|---------|------------------|---------------|
| **Learning Method** | Gradient Descent | Hebbian Learning |
| **Computational Cost** | High | Lower |
| **Biological Basis?** | No | Yes |
| **Handles Streaming Data?** | No | Yes |
| **Uses Dopamine-Like Modulation?** | No | Yes |



### Sources & citation

> Kensuke Yoshida, Taro Toyoizumi, A biological model of nonlinear dimensionality reduction. Sci. Adv.11,eadp9048(2025).DOI:[10.1126/sciadv.adp9048](https://doi.org/10.1126/sciadv.adp9048)
