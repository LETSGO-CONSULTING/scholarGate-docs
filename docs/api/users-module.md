# Módulo Usuarios (ScholarGate)

## Alcance
Módulo completo de usuarios con CRUD, filtros, invitaciones, auditoría, perfil escolar extendido, permisos granulares, seguridad avanzada, acciones bulk y exportaciones.

## REST API
Base: `/api/v1`

### Usuarios
- `GET /users`
  - Query params: `email`, `name`, `role`, `status`, `q`, `page`, `size`
  - Respuesta: `UserPageResponse`
- `POST /users`
  - Crea usuario (nombre, email, estado, roles múltiples, flags de seguridad, perfil, overrides de permisos).
- `PATCH /users/{userId}`
  - Actualiza usuario.
- `PATCH /users/{userId}/password`
  - Resetea contraseña y permite forzar cambio en primer login.
- `PATCH /users/{userId}/security`
  - Gestiona seguridad: desbloqueo, 2FA, forzar cambio, nueva contraseña.
- `DELETE /users/{userId}`
  - Elimina usuario.

### Auditoría e historial
- `GET /users/{userId}/history`
  - Historial de cambios de usuario (roles/estado/campos relevantes).

### Sesiones
- `GET /users/{userId}/sessions`
  - Lista sesiones activas.
- `DELETE /users/{userId}/sessions`
  - Revoca todas las sesiones.
- `DELETE /users/{userId}/sessions/{sessionId}`
  - Revoca sesión específica.

### Acciones masivas
- `POST /users/bulk`
  - Acciones: `ACTIVATE`, `DEACTIVATE`, `ASSIGN_ROLE`, `DELETE`.

### Exportaciones
- `GET /users/export/csv`
- `GET /users/export/excel`

### Invitaciones
- `GET /user-invitations`
  - Query params: `status`, `page`, `size`
- `POST /user-invitations`
  - Envía invitación por email.
- `PATCH /user-invitations/{invitationId}/resend`
  - Reenvía invitación.
- `PATCH /user-invitations/{invitationId}/cancel`
  - Cancela invitación.

## Estados y reglas

### Estado usuario
- `ACTIVE`, `INACTIVE`, `SUSPENDED`, `PENDING`, `BLOCKED`

### Estado invitación
- `PENDING`, `ACCEPTED`, `EXPIRED`, `CANCELED`

### Seguridad implementada
- Política de contraseña reforzada (8-128, mayúscula, minúscula, número, símbolo).
- Forzar cambio de contraseña en primer login.
- Bloqueo temporal por intentos fallidos.
- 2FA opcional por usuario.
- Gestión y revocación de sesiones.

## Integraciones
- ACL de roles (`security/acl`) + overrides de permisos por usuario.
- Auditoría global (`audit_events`) para operaciones críticas.
- Contexto tenant y relaciones con perfiles escolares.

## GraphQL (contrato equivalente recomendado)
El backend actual expone REST. Para GraphQL se recomienda mapear:

### Query
- `users(filter, page, size): UserPage`
- `userInvitations(filter, page, size): UserInvitationPage`
- `userHistory(userId, size): [UserHistoryEntry!]!`
- `userSessions(userId): [UserSession!]!`

### Mutation
- `createUser(input): CreateUserPayload`
- `updateUser(userId, input): User`
- `resetUserPassword(userId, input): User`
- `manageUserSecurity(userId, input): User`
- `deleteUser(userId): Boolean`
- `bulkUsers(input): BulkUserActionResult`
- `sendUserInvitation(input): UserInvitation`
- `resendUserInvitation(invitationId): UserInvitation`
- `cancelUserInvitation(invitationId): UserInvitation`
