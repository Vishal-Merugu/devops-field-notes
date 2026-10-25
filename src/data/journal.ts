export type DayStatus = "planned" | "completed";

export interface DayMeta {
  day: number;
  title: string;
  status: DayStatus;
  area: string;
  description: string;
}

export const suggestedAreas = [
  ["01", "Linux & shell", "The tools and operating systems beneath the work."],
  [
    "02",
    "Git & collaboration",
    "Keep a clear history and make changes safely.",
  ],
  ["03", "Networking", "Follow a request from browser to service."],
  ["04", "Containers", "Package an app with what it needs to run."],
  ["05", "Delivery pipelines", "Make building and shipping repeatable."],
  [
    "06",
    "Cloud & infrastructure",
    "Describe, provision, and understand resources.",
  ],
  ["07", "Kubernetes", "Explore scheduling and operating workloads."],
  [
    "08",
    "Observability",
    "Use logs, metrics, and traces to ask better questions.",
  ],
  ["09", "Security", "Build safer habits into everyday engineering."],
  ["10", "Reliability", "Design for failure and learn from incidents."],
] as const;

// The only status source of truth. Add a day here only after real notes exist.
const completedDayDetails: Record<number, string> = {
  1: "Created kirsty on App Server 3 with a non-interactive shell.",
  2: "Created mariyam on App Server 3 and set the account expiry to 2026-12-07.",
};

export const courseTitles = [
  "Linux User Setup with Non-Interactive Shell",
  "Temporary User Setup with Expiry",
  "Secure Root SSH Access",
  "Script Execution Permissions",
  "SElinux Installation and Configuration",
  "Create a Cron Job",
  "Linux SSH Authentication",
  "Install Ansible",
  "MariaDB Troubleshooting",
  "Linux Bash Scripts",
  "Install and Configure Tomcat Server",
  "Linux Network Services",
  "IPtables Installation And Configuration",
  "Linux Process Troubleshooting",
  "Setup SSL for Nginx",
  "Install and Configure Nginx as an LBR",
  "Install and Configure PostgreSQL",
  "Install and Configure DB Server",
  "Install and Configure Web Application",
  "Configure Nginx + PHP-FPM Using Unix Sock",
  "Set Up Git Repository on Storage Server",
  "Clone Git Repository on Storage Server",
  "Fork a Git Repository",
  "Git Create Branches",
  "Git Merge Branches",
  "Git Manage Remotes",
  "Git Revert Some Changes",
  "Git Cherry Pick",
  "Manage Git Pull Requests",
  "Git hard reset",
  "Git Stash",
  "Git Rebase",
  "Resolve Git Merge Conflicts",
  "Git Hook",
  "Install Docker Packages and Start Docker Service",
  "Deploy Nginx Container on Application Server",
  "Copy File to Docker Container",
  "Pull Docker Image",
  "Create a Docker Image From Container",
  "Docker EXEC Operations",
  "Write a Docker File",
  "Create a Docker Network",
  "Docker Ports Mapping",
  "Write a Docker Compose File",
  "Resolve Dockerfile Issues",
  "Deploy an App on Docker Containers",
  "Docker Python App",
  "Deploy Pods in Kubernetes Cluster",
  "Deploy Applications with Kubernetes Deployments",
  "Set Resource Limits in Kubernetes Pods",
  "Execute Rolling Updates in Kubernetes",
  "Revert Deployment to Previous Version in Kubernetes",
  "Resolve VolumeMounts Issue in Kubernetes",
  "Kubernetes Shared Volumes",
  "Kubernetes Sidecar Containers",
  "Deploy Nginx Web Server on Kubernetes Cluster",
  "Print Environment Variables",
  "Deploy Grafana on Kubernetes Cluster",
  "Troubleshoot Deployment issues in Kubernetes",
  "Persistent Volumes in Kubernetes",
  "Init Containers in Kubernetes",
  "Manage Secrets in Kubernetes",
  "Deploy Iron Gallery App on Kubernetes",
  "Fix Python App Deployed on Kubernetes Cluster",
  "Deploy Redis Deployment on Kubernetes",
  "Deploy MySQL on Kubernetes",
  "Deploy Guest Book App on Kubernetes",
  "Set Up Jenkins Server",
  "Install Jenkins Plugins",
  "Configure Jenkins User Access",
  "Configure Jenkins Job for Package Installation",
  "Jenkins Parameterized Builds",
  "Jenkins Scheduled Jobs",
  "Jenkins Database Backup Job",
  "Jenkins Slave Nodes",
  "Jenkins Project Security",
  "Jenkins Deploy Pipeline",
  "Jenkins Conditional Pipeline",
  "Jenkins Deployment Job",
  "Jenkins Chained Builds",
  "Jenkins Multistage Pipeline",
  "Create Ansible Inventory for App Server Testing",
  "Troubleshoot and Create Ansible Playbook",
  "Copy Data to App Servers using Ansible",
  "Create Files on App Servers using Ansible",
  "Ansible Ping Module Usage",
  "Ansible Install Package",
  "Ansible Blockinfile Module",
  "Ansible Manage Services",
  "Managing ACLs Using Ansible",
  "Ansible Lineinfile Module",
  "Managing Jinja2 Templates Using Ansible",
  "Using Ansible Conditionals",
  "Create VPC Using Terraform",
  "Create Security Group Using Terraform",
  "Create EC2 Instance Using Terraform",
  "Create IAM Policy Using Terraform",
  "Launch EC2 in Private VPC Subnet Using Terraform",
  "Attach IAM Policy for DynamoDB Access Using Terraform",
  "Create and Configure Alarm Using CloudWatch Using Terraform",
] as const;

function areaForDay(day: number) {
  if (day <= 20) return "Linux & services";
  if (day <= 34) return "Git & collaboration";
  if (day <= 47) return "Containers";
  if (day <= 67) return "Kubernetes";
  if (day <= 81) return "Jenkins & delivery";
  if (day <= 93) return "Ansible";
  return "Terraform & cloud";
}

export const days: DayMeta[] = Array.from({ length: 100 }, (_, index) => {
  const day = index + 1;
  const description = completedDayDetails[day];

  return {
    day,
    title: courseTitles[index],
    status: description ? "completed" : "planned",
    area: areaForDay(day),
    description:
      description ?? "Template ready for notes after this day is completed.",
  };
});

const markdown = import.meta.glob("../../days/day-*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;
export function getDayMarkdown(day: number) {
  const key = `../../days/day-${String(day).padStart(2, "0")}.md`;
  return markdown[key];
}
