#!/usr/bin/env python3
"""Tuple creation module."""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple with string and square of number."""
    return (k, float(v * v))
