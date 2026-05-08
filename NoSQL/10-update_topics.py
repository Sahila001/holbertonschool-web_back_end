#!/usr/bin/env python3
""" updates topics """


def update_topics(mongo_collection, name, topics):
    """ change all topics """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
