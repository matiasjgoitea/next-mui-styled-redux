# Contribuyendo Onboarding-UI

## Sobre el "branch" o "rama" a utilizar.

En los proyectos tenemos 3 branches, o ramas por defecto: 

- `prod` === producción.
- `master` === stage.
- `develop` === dev.

En el equipo de Wenance estamos siguiendo [Gitflow](http://aprendegit.com/que-es-git-flow/) por ende los distintos branches deberían tener los siguientes prefijos dependiendo de su tipo: 

- Feature: `feature/nombre-de-la-nueva-funcionalidad`, son generados a partir de `develop`
- HotFix: `hotfix/nombre-descriptivo`, son generados a partir de `prod`.


Para las `features` quedaría algo como esto: `feature/algo-cool`. 
Para los `hotfixes` quedaría algo como esto: `hotfix/error-que-encontramos`. 

## Formato de Commits
Tenemos una estructura a seguir, para facilitar la validación de tus contribuciones y mantener un buen flujo de trabajo. Los mensajes de commits _deberían_ ser de la siguiente manera: 

````

<Acción>(<Ámbito>): <Mensaje Corto>
<LINEA EN BLANCO>
<Mensaje Explicativo>

````

El Encabezado:  `acción(ámbito): <Mensaje Corto>` **es obligatorio**, el resto es opcional. Las acciones disponibles, puedes encontarlas en [Acciones](#acciones), un poco más abajo.

Cualquier línea en un mensaje de commit no de ser mayor de 100 caracteres!. Esto permite la fácil lectura de los mensajes tant oen Github como en varias herramientas de git.

#### Ejemplos:
_Commit Corto:_

`feat(utils): clase Utils para lectura de atributos.`


_*Commit Largo:*_

```
feat(utils): clase Utils para lectura de atributos.

La clase utils,esta divida en varios métodos para diferentes usos.
Para validar se usan los siguientes métodos.
ValidaPhone.
ValidaIp
ValidaNavegador
ValidaNovias
```


## Pull Requests
Por favor asegurate que tú `pull request` cumpla los siguientes lineamientos:

- Crea un `pull request` individual por cada aporte.
- Usa `title-casing` [(AP style)](http://www.grammar-monster.com/lessons/capital_letters_title_case.htm).
- Presta mucha atención a tu ortografía.
- Nuevos aportes o mejoras a lo que ya existe, siempre es bienvenido.


## Tipos Acciones
Las acciones son los indicativos primordiales de los cambios que realizamos en un determinado archivo. Con éstas lo que intentamos es saber con una simple lectura que tipo de modificació fué hecha.
Actualmente tenemos estás acciones disponibles: 

- **feat**: Implementación de nueva funcionalidad.
- **fix**: Corrección de algún bug.
- **docs**: Cambios en documentación.
- **perf**: Cambios en rendimiento.
- **refactor**: Un cambio de código que no corrige errores ni añade características.
- **chore**: Otros cambios que no modifica codigo funcional de la aplicación.

## Ámbito
El ámbito es el lugar de la aplicación donde se realiza el cambio.

## Mensaje
El mensaje debe contener una descripción clara y concisa del cambio realizado.

- Use tiempo presente imperativo, agrega, no agregado ni agregó.
- No capitalizar la primera letra.
- No coloque punto (.) al final

## Idioma
Por estándar hemos definido que los comentarios deberan ser en **inglés**.

_Si quieres proponer un nuevo tipo de "Accion", puedes abrir un `issue`, para ello en este [enlace](https://github.com/wenance/onboarding-ui/issues)_

## URL de entornos
Todos los entornos funcionan en modo mobile.

| Producto | Ambiente | URL |
| --- | --- | --- |
| `PRESTO` | DEV | [http://onboarding-ui-dev.fintechpeople.io/](http://onboarding-ui-dev.fintechpeople.io/) |
| `PRESTO` | STAGE | [http://onboarding-ui-stage.fintechpeople.io/](http://onboarding-ui-stage.fintechpeople.io/) |
| `PRESTO` | PROD | [https://app.prestohoy.com.ar/](https://app.prestohoy.com.ar/) |
| --- | --- | --- |
| `POSTA` | DEV | [http://onboardingrio-dev.dev.fintechpeople.net/](http://onboardingrio-dev.dev.fintechpeople.net/) |
| `POSTA` | STAGE | --- |
| `POSTA` | PROD | --- |

## Variables de Entorno Productivas

| Variable | Descripción | Valores posibles |
| --- | --- | --- |
| REACT_APP_ENV | Environment | `DEV-STAGE-PROD` |
| REACT_APP_BRAND | Theme product | `PRESTO-POSTA` |

## REFACTOR

- Containers

_Los container son los componentes que van a manejar toda la data de cada page._

- Form 

_Es el que maneja la logica para crear los formularios_.
