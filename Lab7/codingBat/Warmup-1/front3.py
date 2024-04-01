def front3(str):
    cut = len(str) if len(str) < 3 else 3
    front = str[:cut]
    return front + front + front