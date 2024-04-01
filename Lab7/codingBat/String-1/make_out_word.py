def make_out_word(out, word):
  half_length = len(out) // 2
  return out[:half_length] + word + out[half_length:]