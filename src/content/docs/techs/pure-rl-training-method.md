---
title: pure-RL training method (used by deepseek in r1)
description: .
---
![Image](https://github.com/user-attachments/assets/35708136-d413-484c-9d81-57fa5c23036b)

### The GRPO RL framework

Traditionally, RL for training LLMs has been most successful when combined with labeled data (e.g the [PPO RL Framework](https://arxiv.org/abs/1707.06347)). This RL approach employs a critic model that’s like an “LLM coach”, giving feedback on each move to help the model improve. It evaluates the LLM's actions against labeled data, evaluating how likely the model is to succeed (value function) and guiding the model’s overall strategy.

With GRPO, you skip the ‘coach’—and the LLM moves are scored over multiple rounds by using predefined rules like coherence and/or fluency. These models learn by comparing these scores to the group’s average.

But wait, how did they know if these rules are the right rules?

In this method, the rules aren't perfect—they’re just a best guess at what "good" looks like. These rules are designed to catch patterns that usually make sense, like:

- Does the answer make sense? (Coherence)
- Is it in the right format? (Completeness)
- Does it match the general style we expect? (Fluency)

For example, for the DeepSeek-R1-Zero model, for mathematical tasks, the model could be rewarded for producing outputs that adhered to mathematical principles or logical consistency, even without knowing the exact answer.

---

### Get GRPO Method here!!!

Group Robust Preference Optimization in Reward-free RLHF: https://doi.org/10.48550/arXiv.2405.20304

### From the authors of GRPO

Adapting large language models (LLMs) for specific tasks usually involves fine-tuning through reinforcement learning with human feedback (RLHF) on preference data. While these data often come from diverse labelers' groups (e.g., different demographics, ethnicities, company teams, etc.), traditional RLHF approaches adopt a "one-size-fits-all" approach, i.e., they indiscriminately assume and optimize a single preference model, thus not being robust to unique characteristics and needs of the various groups. To address this limitation, we propose a novel Group Robust Preference Optimization (GRPO) method to align LLMs to individual groups' preferences robustly. 

Our approach builds upon reward-free direct preference optimization methods, but unlike previous approaches, it seeks a robust policy which maximizes the worst-case group performance. 

To achieve this, GRPO adaptively and sequentially weights the importance of different groups, prioritizing groups with worse cumulative loss. We theoretically study the feasibility of GRPO and analyze its convergence for the log-linear policy class. By fine-tuning LLMs with GRPO using diverse group-based global opinion data, we significantly improved performance for the worst-performing groups, reduced loss imbalances across groups, and improved probability accuracies compared to non-robust baselines.


### Sources and Citations

> Group Robust Preference Optimization in Reward-free RLHF: https://doi.org/10.48550/arXiv.2405.20304

> https://github.com/deepseek-ai/DeepSeek-R1/blob/main/DeepSeek_R1.pdf

> https://www.vellum.ai/blog/the-training-of-deepseek-r1-and-ways-to-use-it