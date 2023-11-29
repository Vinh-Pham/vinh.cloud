workflow "Trigger" {
  on = "push"
  resolves = ["Push To ECR"]
}

action "Login to AWS" {
  uses = "actions/aws/cli@aba0951d3bb681880614bbf0daa29b4a0c9d77b8"
  secrets = ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
  runs = "$(aws ecr get-login --no-include-email --region us-east-1)"
}

action "Build Image" {
  uses = "actions/docker/cli@c08a5fc9e0286844156fefff2c141072048141f6"
  needs = ["Login to AWS"]
  args = "build -t vinh/vinh-cloud ."
}

action "Tag Image" {
  uses = "actions/docker/cli@c08a5fc9e0286844156fefff2c141072048141f6"
  needs = ["Build Image"]
  args = "tag vinh/vinh-cloud:latest 726663376655.dkr.ecr.us-east-1.amazonaws.com/vinh/vinh-cloud:latest"
}

action "Push To ECR" {
  uses = "actions/docker/cli@c08a5fc9e0286844156fefff2c141072048141f6"
  needs = ["Tag Image"]
  args = "push 726663376655.dkr.ecr.us-east-1.amazonaws.com/vinh/vinh-cloud:latest"
}
