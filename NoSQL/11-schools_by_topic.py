#!/usr/bin/env python3
"""
Module that returns list of schools that match a specific topic
"""

def schools_by_topic(mongo_collection, topic):
    """
    Returns list of documents where topic exists in topics array
    """
    return mongo_collection.find({"topics": topic})
