def del_folders(name):
    """If a folder with a named prefix exists in directory, delete it. """
    contents = os.listdir()
    for item in contents:
        if os.path.isdir(item) and item.startswith(name):
            shutil.rmtree(item)

def clean_folder(prefix_to_save):
    """Delete all files in folder except those with a prefix"""
    files = os.listdir()
    for file in files:
        if not file.startswith(prefix_to_save):
            if not file.startswith(prefix_to_save):
                os.remove(file)
