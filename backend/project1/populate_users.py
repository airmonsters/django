import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "project1.settings")

import django
django.setup()

from apptwo.models import User
from faker import Faker

fakegen = Faker()

def populate(N = 5):
    for entry in range(N):
        fake_name = fakegen.name().split()
        fake_name_first = fake_name[0]
        fake_name_last = fake_name[1]
        fake_email = fakegen.email()

        user = User.objects.get_or_create(first_name = fake_name_first, last_name = fake_name_last, email = fake_email)[0]



if __name__ == '__main__':
    print('start create date')
    populate(20)
    print('complete')