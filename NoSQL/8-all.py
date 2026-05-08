#!/usr/bin/env python3
""" lists all documents """


def list_all(mongo_collection):
    """ return list of documents """
    return list(mongo_collection.find())
