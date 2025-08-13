---
layout: post
title: "pre-commit basic usage"
authors: itxx00
description: "描述"
categories: [shell]
tags: [bash, ]
---


## install

```
pip install pre-commit

```

## init

```
git clone https://xxx/xxx.git
cd xxx
pre-commit install

pre-commit sample-config >.pre-commit-config.yaml
```

## test

```
pre-commit run --all-files
pre-commit run --files xxx.py

```

## sample conf

```yaml
# See https://pre-commit.com for more information
# See https://pre-commit.com/hooks.html for more hooks
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.5.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
      - id: check-added-large-files

  - repo: https://github.com/talos-systems/conform
    rev: v0.1.0-alpha.27
    hooks:
      - id: conform
        stages:
          - commit-msg


  - repo: https://github.com/5xops/mirrors-shellcheck
    rev: v1.0
    hooks:
      - id: shellcheck
        args:
          - --exclude=SC2148,SC2155,SC2009,SC2029,SC1091

  - repo: https://github.com/psf/black
    rev: 23.11.0
    hooks:
      - id: black
        args: [--line-length=1000]


#  - repo: https://github.com/pre-commit/mirrors-mypy
#    rev: v0.770
#    hooks:
#      - id: mypy
#        language: python_venv
#        exclude: ^(docs/|example-plugin/|tests/fixtures)

  - repo: https://github.com/PyCQA/flake8
    rev: 6.1.0
    hooks:
      - id: flake8
        exclude: $(.tox/|.git/|__pycache__/|build/|dist/|.cache|.eggs/)
        args:
          - --ignore=E501,W503,E722,W605,E203

  - repo: https://github.com/PyCQA/pylint
    rev: v3.0.1
    hooks:
      - id: pylint
        language: python
        args:
          - --disable=R0801,C0114,C0115,C0116,C0209,C0415,E0401,W1401,R0912,R0913,R0914,R0915,W0212,C0103
          - --max-line-length=120
