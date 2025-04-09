from rest_framework.serializers import ModelSerializer
from .models import Note

# Serializers allow complex data such as querysets and model instances to be converted to native Python datatypes that can then be easily rendered into JSON, XML or other content types.
class Note_Serializer(ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'