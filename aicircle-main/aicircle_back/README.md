aicircle
==============================

__Version:__ 0.0.0

Add a short project description here.

## Features
- Django Rest Framework Project Setup
- Authentication and Authorization
- Celery setup
    > To run Celery: `celery -A aicircle_back worker -l info`

    > To run Celery Beat: `celery -A aicircle_back beat -l info --scheduler django_celery_beat.schedulers:DatabaseScheduler`
- AWS clients and util functions
- Pytest setup
- Github Actions
    > spell_check

    > black_check
- Dockerfile.django for backend: https://github.com/prodinit/ecs-django-scaffold
- Dockerfile.nginx for reverse proxy: https://github.com/prodinit/ecs-django-scaffold
- TF to deploy django app in ECS with circleci: https://github.com/prodinit/ecs-django-scaffold

## Getting up and running

Minimum requirements: **pip, python3.9, poetry, redis & [PostgreSQL 11][install-postgres]**, setup is tested on Mac OSX only.

```
brew install python3 poetry libmagic postgres
```

[install-postgres]: http://www.gotealeaf.com/blog/how-to-install-postgresql-on-a-mac

### Poetry

To guarantee repeatable installations, all project dependencies are managed using [Poetry](https://python-poetry.org/). The project’s direct dependencies are listed in `pyproject.toml`.
Running `poetry lock` generates `poetry.lock` which has all versions pinned.

You can install Poetry by using `pip install --pre poetry` or by following the official installation guide [here](https://github.com/python-poetry/poetry#installation).

*Tip:* We recommend that you use this workflow and keep `pyproject.toml` as well as `poetry.lock` under version control to make sure all computers and environments run exactly the same code.

### Celery
To run Celery
`celery -A aicircle_back worker -l info`

To run Celery Beat:
`celery -A aicircle_back beat -l info --scheduler django_celery_beat.schedulers:DatabaseScheduler`

### Other tools

For compatibility, `requirements.txt` can be updated by running

```bash
poetry export --without-hashes -f requirements.txt -o requirements.txt
```

, respectively.

## Contributing

Golden Rule:

> Anything in **main** is always **deployable**.

Avoid working on `main` branch, create a new branch with meaningful name, send pull request asap. Be vocal!
