from .models import Note
from .serializers import Note_Serializer
from rest_framework.response import Response

def get_notes_list(request):
    notes = Note.objects.all().order_by('-updated')
    serializer = Note_Serializer(notes, many=True)

    return Response(serializer.data)

def get_note_details(request, pk):
    note = Note.objects.get(id=pk)
    serializer = Note_Serializer(note, many=False)

    return Response(serializer.data)

def create_note(request):
    data = request.data
    note = Note.objects.create(
        body=data['body']
    )
    serializer = Note_Serializer(note, many=False)

    return Response(serializer.data) 

def update_note(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = Note_Serializer(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

def delete_note(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()

    return Response('Note was deleted!')
