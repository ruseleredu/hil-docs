import os

# Your custom HTML to inject
extra_html = """\n <a
          aria-label="HIL Documentation"
          class="md-header__button md-logo"
          data-md-component="logo"
          href="../index.html"
          title="HIL Documentation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M20 5h-7.586l-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM4 5h5.586l2 2H20v12H4V5z"
            />
          </svg>
        </a>
        """
target_tag = '<nav aria-label="Header" class="md-header__inner md-grid">'
target_dir = "./"

for root, dirs, files in os.walk(target_dir):
    for file in files:
        if file.endswith(".html"):
            path = os.path.join(root, file)
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
            
            if target_tag in content and extra_html not in content:
                new_content = content.replace(target_tag, target_tag + extra_html)
                with open(path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated: {path}")