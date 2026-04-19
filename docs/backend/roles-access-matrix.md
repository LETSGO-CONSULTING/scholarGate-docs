---
id: backend-roles-access-matrix
title: Roles, Scope and Permissions Matrix
sidebar_label: Roles & Access
---

# Matriz de Roles, Alcance y Permisos

Este documento detalla las diferencias entre roles en scholarGate, incluyendo:

- Alcance funcional por rol (tenant completo vs sede específica).
- Reglas de acceso a **Aulas** por sede.
- Matriz detallada de opciones/permisos.

## Regla Base de Diseño

| Regla | Definición |
| --- | --- |
| Código técnico | Siempre en inglés (`TENANT_ADMIN`, `OWNER`, `DIRECTOR`, etc.). |
| Texto UI | Traducible por idioma del usuario. Por defecto: español. |
| Código vs etiqueta | El código nunca se traduce; solo la etiqueta visual. |

## 1) Catálogo de Roles

| Tipo | Fuente | Estado | Ejemplos |
| --- | --- | --- | --- |
| Roles de sistema | `TenantRoleCatalogService.SYSTEM_ROLE_NAMES` | Fijos (no editables/eliminables) | `TENANT_ADMIN`, `ACADEMIC_COORDINATOR`, `TEACHER`, `TUTOR`, `STUDENT`, `PARENT` |
| Roles personalizados | `tenant_roles` | Definidos por cada tenant | `DIRECTOR`, `OWNER`, `SCHOOL_OWNER`, etc. |
| Roles técnicos heredados | `PermissionMapping` | Soportados en backend (según asignación) | `SUPPORT`, `STAFF`, `FINANCE` |

## 2) Diferencia de Roles (Resumen Operativo)

| Rol (código) | Etiqueta UI sugerida (ES) | Alcance esperado | Enfoque principal |
| --- | --- | --- | --- |
| `SUPER_ADMIN` | Super administrador | Plataforma completa (multi-tenant) | Operación global de plataforma y tenants |
| `TENANT_ADMIN` | Administrador del colegio | Todo el tenant | Administración integral del colegio |
| `OWNER` | Propietario | Todo el tenant | Dueño del colegio con visión multisede |
| `SCHOOL_OWNER` | Propietario del colegio | Todo el tenant | Variante de rol propietario con visión multisede |
| `DIRECTOR` (custom) | Director de sede | Sede asignada | Gestión operativa de una sede |
| `ACADEMIC_COORDINATOR` | Coordinador académico | Según configuración (ideal: por sede o dominio académico) | Estructura/currículo/horarios |
| `TEACHER` | Docente | Contexto académico asignado | Dictado, asistencia, notas, tareas |
| `TUTOR` | Tutor | Contexto asignado | Seguimiento y comunicación |
| `STUDENT` | Estudiante | Propio | Consulta académica personal |
| `PARENT` | Padre/Madre | Propio/familiar | Seguimiento del alumno y pagos |

## 3) Regla de Alcance por Sede para Aulas (Implementada)

La regla para `academic.structure.classrooms` (listado/crear/editar/eliminar) está implementada en frontend y backend.

| Caso | Resultado |
| --- | --- |
| Usuario con rol en `{SUPER_ADMIN, TENANT_ADMIN, OWNER, SCHOOL_OWNER}` | Puede ver y operar aulas de todas las sedes del tenant (o filtrar por sede). |
| Usuario con rol fuera de ese grupo y con `branch_id` asignado | Solo puede ver y operar su sede asignada. |
| Usuario con rol fuera de ese grupo y sin `branch_id` asignado | Acceso bloqueado para aulas hasta asignar sede. |
| Usuario de sede intenta forzar otra sede por API (`branchId`) | Rechazado por backend (`You do not have access to the requested branch`). |

## 4) Opciones de Permiso (Tabla Detallada)

Referencia: `Permission` + asignación base en `PermissionMapping.forRole`.

| Opción (Permission) | Descripción funcional (UI/negocio) | Roles con acceso por defecto |
| --- | --- | --- |
| `DASHBOARD_VIEW` | Ver paneles e indicadores generales | `SUPER_ADMIN`, `TENANT_ADMIN`, `ACADEMIC_COORDINATOR`, `TEACHER`, `TUTOR`, `STUDENT`, `PARENT`, `SUPPORT`, `STAFF`, `FINANCE` |
| `TENANT_MANAGE` | Gestionar tenant (nivel plataforma) | `SUPER_ADMIN`, `SUPPORT` |
| `TENANT_MODULE_MANAGE` | Activar/desactivar módulos del tenant | `SUPER_ADMIN`, `SUPPORT` |
| `TENANT_USER_MANAGE` | Administrar usuarios del tenant | `SUPER_ADMIN`, `TENANT_ADMIN`, `SUPPORT` |
| `PLATFORM_USER_MANAGE` | Administrar usuarios de plataforma | `SUPER_ADMIN`, `SUPPORT` |
| `ACADEMIC_CATALOG_MANAGE` | Gestionar catálogo académico | `SUPER_ADMIN`, `TENANT_ADMIN`, `ACADEMIC_COORDINATOR`, `SUPPORT` |
| `ACADEMIC_CATALOG_VIEW` | Ver catálogo académico | `SUPER_ADMIN`, `TEACHER` |
| `ENROLLMENT_MANAGE` | Gestionar matrículas/inscripción | `SUPER_ADMIN`, `TENANT_ADMIN`, `ACADEMIC_COORDINATOR`, `SUPPORT` |
| `ENROLLMENT_VIEW` | Ver información de matrícula | `SUPER_ADMIN`, `TEACHER` |
| `SCHEDULE_MANAGE` | Gestionar horarios | `SUPER_ADMIN`, `TENANT_ADMIN`, `ACADEMIC_COORDINATOR`, `TEACHER`, `SUPPORT` |
| `SCHEDULE_VIEW` | Ver horarios | `SUPER_ADMIN`, `TUTOR`, `STUDENT`, `PARENT` |
| `ATTENDANCE_MANAGE` | Gestionar asistencia | `SUPER_ADMIN`, `TENANT_ADMIN`, `TEACHER`, `SUPPORT` |
| `ATTENDANCE_VIEW` | Ver asistencia | `SUPER_ADMIN`, `ACADEMIC_COORDINATOR`, `TUTOR`, `STUDENT`, `PARENT` |
| `GRADES_MANAGE` | Gestionar calificaciones | `SUPER_ADMIN`, `TENANT_ADMIN`, `TEACHER`, `SUPPORT` |
| `GRADES_VIEW` | Ver calificaciones | `SUPER_ADMIN`, `ACADEMIC_COORDINATOR`, `TUTOR`, `STUDENT`, `PARENT` |
| `COMMUNICATIONS_MANAGE` | Gestionar comunicaciones/mensajes | `SUPER_ADMIN`, `TENANT_ADMIN`, `ACADEMIC_COORDINATOR`, `TEACHER`, `TUTOR`, `SUPPORT` |
| `COMMUNICATIONS_VIEW` | Ver comunicaciones | `SUPER_ADMIN`, `STUDENT`, `PARENT` |
| `PAYMENTS_MANAGE` | Gestionar cobros/pagos | `SUPER_ADMIN`, `TENANT_ADMIN`, `SUPPORT`, `STAFF`, `FINANCE` |
| `PAYMENTS_VIEW` | Ver estado de pagos | `SUPER_ADMIN`, `ACADEMIC_COORDINATOR`, `STUDENT`, `PARENT`, `STAFF`, `FINANCE` |
| `CONTENT_MANAGE` | Gestionar contenidos/recursos | `SUPER_ADMIN`, `TENANT_ADMIN`, `TEACHER`, `SUPPORT` |
| `CONTENT_VIEW` | Ver contenidos/recursos | `SUPER_ADMIN`, `ACADEMIC_COORDINATOR`, `TUTOR`, `STUDENT`, `PARENT` |
| `DISCIPLINE_MANAGE` | Gestionar incidencias disciplinarias | `SUPER_ADMIN`, `TENANT_ADMIN`, `ACADEMIC_COORDINATOR`, `TEACHER`, `TUTOR`, `SUPPORT` |
| `DISCIPLINE_VIEW` | Ver incidencias disciplinarias | `SUPER_ADMIN`, `PARENT` |
| `REPORTS_VIEW` | Ver/reportar/exportar reportes | `SUPER_ADMIN`, `TENANT_ADMIN`, `ACADEMIC_COORDINATOR`, `TEACHER`, `SUPPORT`, `STAFF`, `FINANCE` |
| `INTEGRATIONS_MANAGE` | Gestionar integraciones | `SUPER_ADMIN`, `TENANT_ADMIN`, `SUPPORT` |
| `ANNOUNCEMENTS_GLOBAL` | Difusión global transversal | `SUPER_ADMIN` |
| `BRANDING_VIEW` | Ver branding institucional | `SUPER_ADMIN`, `TENANT_ADMIN`, `ACADEMIC_COORDINATOR`, `SUPPORT` |
| `BRANDING_EDIT` | Editar branding | `SUPER_ADMIN`, `TENANT_ADMIN`, `SUPPORT` |
| `BRANDING_PUBLISH` | Publicar branding | `SUPER_ADMIN`, `TENANT_ADMIN`, `SUPPORT` |
| `BRANDING_ROLLBACK` | Revertir branding | `SUPER_ADMIN`, `TENANT_ADMIN`, `SUPPORT` |

## 5) Niveles ACL por Menú (AccessLevel)

Además del `PermissionMapping`, scholarGate usa ACL de menús (`PermissionMatrixService`) con niveles:

| Nivel | Significado |
| --- | --- |
| `NO` | Sin acceso |
| `VIEW` | Solo lectura |
| `OWN` | Solo sobre contexto propio |
| `REGISTER` | Registro/carga puntual |
| `MANAGE` | Gestión operativa |
| `FULL` | Control total sobre opción |

Este nivel permite refinar permisos por menú para roles de tenant y roles custom.

## 6) Convención Recomendada para Multi-Sede

| Escenario de negocio | Rol recomendado (código) | Etiqueta UI sugerida (ES) |
| --- | --- | --- |
| Dueño con control de todo el colegio | `OWNER` o `SCHOOL_OWNER` | Propietario |
| Administrador general del colegio | `TENANT_ADMIN` | Administrador del colegio |
| Administrador por sede | `DIRECTOR` (custom) + `branch_id` obligatorio | Director de sede |
| Coordinación académica transversal | `ACADEMIC_COORDINATOR` | Coordinador académico |

## Referencias Técnicas

- `scholarGate-backend/src/main/java/com/scholargate/security/roles/application/TenantRoleCatalogService.java`
- `scholarGate-backend/src/main/java/com/scholargate/security/PermissionMapping.java`
- `scholarGate-backend/src/main/java/com/scholargate/security/Permission.java`
- `scholarGate-backend/src/main/java/com/scholargate/security/acl/application/PermissionMatrixService.java`
- `scholarGate-backend/src/main/java/com/scholargate/academic/resource/application/AcademicResourceService.java`
- `scholarGate-frontend/src/app/core/security/role-labels.ts`
