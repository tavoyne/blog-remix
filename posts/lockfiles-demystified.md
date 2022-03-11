---
creationDate: 2022/01/24
description: This topic may sound a bit off-trend to the fancy NTF/Web3/Metaverse people out there, but screw the fame.
title: Lockfiles demystified
---

# Lockfiles demystified

This topic may sound a bit off-trend to the fancy NTF/Web3/Metaverse people out there, but screw the fame. I found out that it's worth sometimes going back to basics and explaining stuff everybody understands.

## TL;DR

A lockfile is a file that keeps track of the exact versions your package manager has resolved your dependencies to, at a given time. It exists so that two subsequent install commands always produce the same dependency tree, regardless of intermediate dependency updates. It is needed because a package.json file alone is not explicit enough to enforce such determinism.
