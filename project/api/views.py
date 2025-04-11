from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import Note_Serializer

@api_view(['GET'])
def get_routes(request):

    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]

    return Response(routes)

@api_view(['GET'])
def get_notes(request):
    notes = Note.objects.all().order_by('-updated')
    serializer = Note_Serializer(notes, many=True)

    return Response(serializer.data)

@api_view(['GET'])
def get_note(request, pk):
    note = Note.objects.get(id=pk)
    serializer = Note_Serializer(note, many=False)

    return Response(serializer.data)

@api_view(['POST'])
def create_note(request):
    data = request.data
    note = Note.objects.create(
        body=data['body']
    )
    serializer = Note_Serializer(note, many=False)

    return Response(serializer.data)

@api_view(['PUT'])
def update_note(request, pk):
    data = request.data
    note = Note.objects.get(id=pk)
    serializer = Note_Serializer(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def delete_note(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()

    return Response('Note was deleted!')

