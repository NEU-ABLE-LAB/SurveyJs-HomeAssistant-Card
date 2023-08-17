def read_last_line(filename):
  """Reads the last line of a text file.

  Args:
    filename: The name of the text file.

  Returns:
    The last line of the text file, or an empty string if the file is empty.
  """

  with open(filename, "r") as f:
    lines = f.readlines()
  return lines[-1] if lines else ""

def split_json_string(json_string):
  """Splits a JSON string into a list of strings, one per line.

  Args:
    json_string: The JSON string.

  Returns:
    A list of strings, one per line of the JSON string.
  """

  lines = json_string.split("\n")
  return [line.strip() for line in lines]

def write_lines_to_file(lines, filename):
  """Writes a list of strings to a file.

  Args:
    lines: The list of strings to write to the file.
    filename: The name of the file to write to.
  """

  with open(filename, "w") as f:
    for line in lines:
      f.write(line + "\n")

def main():
  """The main function."""

  text_filename = "data.txt"
  json_filename = "data.json"

  # Read the last line of the text file.
  last_line = read_last_line(text_filename)

  # Split the JSON string into a list of strings, one per line.
  lines = split_json_string(last_line)

  # Write the lines to the .JSON file.
  write_lines_to_file(lines, json_filename)

if __name__ == "__main__":
  main()
