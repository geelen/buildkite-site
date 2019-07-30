workflow "Compress Images" {
  resolves = ["image-actions"]
  on = "pull_request"
}

action "image-actions" {
  uses = "calibreapp/image-actions@0.0.2"
  secrets = ["GITHUB_TOKEN"]
}
