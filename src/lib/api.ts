import type { Applicant } from "../app/components/types";

const API_BASE_URL = "https://bmidcy9z17.execute-api.ap-northeast-2.amazonaws.com";

export async function submitApplication(
  applicant: Applicant
): Promise<{ success: boolean; id?: number }> {
  const response = await fetch(`${API_BASE_URL}/api/tesol_expert_applications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(applicant),
  });
  if (!response.ok) {
    throw new Error(`서버 오류: ${response.status}`);
  }
  return response.json();
}
