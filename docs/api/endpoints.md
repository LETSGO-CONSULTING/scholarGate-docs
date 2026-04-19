---
id: api-endpoints
title: API Endpoints Reference
sidebar_label: Endpoints
---

# API Endpoints Reference

Base URL: `/api/v1`  
All endpoints require `Authorization: Bearer <token>` and `X-Tenant-ID: <id>` unless noted.

---

## Auth

| Method | Path | Description | Auth |
|---|---|---|---|
| POST | `/auth/register` | Register user | Public |
| POST | `/auth/login` | Login → access + refresh tokens | Public |
| POST | `/auth/login/superadmin` | Super admin login | Public |
| POST | `/auth/refresh` | Refresh access token | Public |

---

## Users

| Method | Path | Description |
|---|---|---|
| GET | `/users` | List users |
| POST | `/users` | Create user |
| PUT | `/users/{id}` | Update user |
| DELETE | `/users/{id}` | Delete user |
| POST | `/users/{id}/reset-password` | Reset password |
| GET | `/users/{id}/sessions` | List user sessions |
| POST | `/user-invitations` | Send invitation |
| POST | `/user-invitations/{id}/resend` | Resend invitation |
| DELETE | `/user-invitations/{id}` | Cancel invitation |

---

## Academic — Students

| Method | Path | Description |
|---|---|---|
| GET | `/academic/students` | List students |
| POST | `/academic/students` | Create student |
| GET | `/academic/students/{id}` | Get student |
| PUT | `/academic/students/{id}` | Update student |
| DELETE | `/academic/students/{id}` | Delete student |
| GET | `/academic/students/by-class/{sectionId}` | Students in section |
| POST | `/academic/students/{id}/avatar` | Upload avatar |

---

## Academic — Teachers

| Method | Path | Description |
|---|---|---|
| GET | `/academic/teachers` | List teachers |
| POST | `/academic/teachers` | Create teacher |
| GET | `/academic/teachers/{id}` | Get teacher |
| PUT | `/academic/teachers/{id}` | Update teacher |
| DELETE | `/academic/teachers/{id}` | Delete teacher |
| POST | `/academic/teachers/{id}/avatar` | Upload avatar |
| POST | `/academic/teachers/{id}/documents` | Upload document |

---

## Academic — Sections, Subjects, Assignments

| Method | Path | Description |
|---|---|---|
| GET/POST | `/academic/sections` | List / create sections |
| GET/PUT/DELETE | `/academic/sections/{id}` | Get / update / delete |
| GET/POST | `/academic/subjects` | List / create subjects |
| GET/POST | `/academic/assignments` | Teacher-subject-section assignments |
| GET/POST | `/academic/enrollments` | Student enrollments |
| GET/POST | `/academic/levels` | Academic levels |
| GET/POST | `/academic/shifts` | School shifts |

---

## Academic — Grades & Assessments

| Method | Path | Description |
|---|---|---|
| GET | `/academic/grades/portal` | Student grade portal |
| GET | `/academic/grades/reports` | Grade reports |
| GET/POST | `/academic/grades/report-cards` | Report cards |
| POST | `/academic/grades/report-cards/{id}/export` | Export PDF |
| GET/POST | `/academic/assessments` | Assessments |
| POST | `/academic/assessments/{id}/publish` | Publish assessment |
| GET/POST | `/academic/rubrics` | Rubrics |
| POST | `/academic/rubrics/{id}/criteria` | Add criteria |
| POST | `/academic/rubrics/{id}/import` | Import rubric |
| GET/POST | `/academic/grades-catalog` | Grading catalog |

---

## Academic — Attendance

| Method | Path | Description |
|---|---|---|
| GET/POST | `/academic/attendance` | Record attendance |
| GET | `/academic/attendance/reports` | Attendance reports |

---

## Academic — Schedules

| Method | Path | Description |
|---|---|---|
| GET/POST | `/academic/schedules` | Class schedules |
| GET | `/academic/schedules/{id}/versions` | Schedule version history |
| GET | `/academic/schedules/{id}/changelog` | Change log |

---

## Academic — Other

| Method | Path | Description |
|---|---|---|
| GET/POST | `/academic/periods` | Academic periods |
| GET/POST | `/academic/resources` | Learning resources |
| GET/POST | `/academic/study-groups` | Study groups |
| GET/POST | `/academic/space-bookings` | Space / room bookings |
| GET/POST | `/academic/guardians` | Student guardians |
| GET/POST | `/academic/holidays` | School holidays |

---

## Configuration

| Method | Path | Description |
|---|---|---|
| GET/POST | `/academic/school-years` | School years |
| POST | `/academic/school-years/{id}/activate` | Activate school year |
| POST | `/academic/school-years/{id}/close` | Close school year |
| POST | `/academic/school-years/{id}/reopen` | Reopen school year |
| GET/POST | `/configuration/grading-scales` | Grading scales |

---

## Communications

| Method | Path | Description |
|---|---|---|
| GET/POST | `/communications/announcements` | Announcements |
| POST | `/communications/announcements/{id}/publish` | Publish |
| GET/POST | `/communications/messages` | Internal messages |

---

## Finance / Payments

| Method | Path | Description |
|---|---|---|
| GET/POST | `/payments/payments` | Payment records |
| GET/POST | `/payments/charges` | Billing charges (Culqi) |
| GET/POST | `/payments/concepts` | Payment concepts |
| GET | `/payments/statement` | Payment statement |

---

## Tenant & Branding

| Method | Path | Description |
|---|---|---|
| GET/PUT | `/tenant/self` | Tenant profile |
| GET/PUT | `/tenant/preferences` | Tenant preferences |
| GET/PUT | `/tenant/branding` | Branding & logo |
| GET/POST | `/branch` | Branches |
| POST | `/branch/{id}/activate` | Activate branch |
| POST | `/branch/{id}/deactivate` | Deactivate branch |
| POST | `/branch/{id}/set-main` | Set as main branch |

---

## Security & Roles

| Method | Path | Description |
|---|---|---|
| GET/POST | `/security/roles` | Role catalog |
| GET | `/security/permissions` | Permission evaluation |

---

## Navigation & Dashboards

| Method | Path | Description |
|---|---|---|
| GET | `/navigation` | Dynamic menu for current user |
| GET | `/dashboards/tenant` | Tenant analytics |
| GET | `/dashboards/platform` | Platform analytics (SUPER_ADMIN) |

---

## Platform (SUPER_ADMIN only)

| Method | Path | Description |
|---|---|---|
| GET/POST | `/platform/tenants` | List / create tenants |
| PATCH | `/platform/tenants/{id}` | Update tenant |
| GET | `/platform/tenants/{id}/metrics` | Usage metrics |
| GET/POST | `/platform/tenants/{id}/users` | Manage tenant users |
| GET/POST | `/platform/plans` | Subscription plans |
| GET | `/platform/dashboards` | Platform dashboard |

---

## Health

```
GET /health   → { status: "UP" }
```
