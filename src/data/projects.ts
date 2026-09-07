import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "selenium-automation",

    title: "데이터 수집 자동화",

    summary:
      "Selenium과 AWS를 활용한 데이터 수집 자동화",

    description:
      "반복적인 데이터 수집 업무를 자동화하기 위해 개발한 프로젝트입니다.",

    role:
      "자동화 프로그램 개발 및 AWS 실행 환경 구성",

    tech: [
      "Python",
      "Selenium",
      "AWS Lambda",
      "S3",
      "EventBridge",
      "Docker",
    ],

    problem:
      "반복적으로 데이터를 직접 수집해야 하는 문제가 있었습니다.",

    solution:
      "Selenium 기반 자동화 프로그램을 구현하고 AWS Lambda에서 실행하도록 구성했습니다.",

    result:
      "반복적인 데이터 수집 작업을 자동화했습니다.",
  },
];