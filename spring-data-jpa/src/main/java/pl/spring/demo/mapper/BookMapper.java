package pl.spring.demo.mapper;


import pl.spring.demo.entity.AuthorEntity;
import pl.spring.demo.entity.BookEntity;
import pl.spring.demo.to.AuthorTo;
import pl.spring.demo.to.BookTo;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class BookMapper {

    public static BookTo map(BookEntity bookEntity) {
        if (bookEntity != null) {
            return new BookTo(bookEntity.getId(), bookEntity.getTitle(), mapAuthors(bookEntity.getAuthors()));
        }
        return null;
    }
//
    public static BookEntity map(BookTo bookTo) {
        if (bookTo != null) {
        	BookEntity bookEntity = new BookEntity(bookTo.getId(), bookTo.getTitle());
        	bookEntity.setAuthors(map2Entity(bookTo.getAuthors()));
        	return bookEntity;
        }
        return null;
    }
    
    private static Set<AuthorEntity> map2Entity(String authors) {
    	Set<AuthorEntity> authorSet = new HashSet<>();
    	
    	for (String author : authors.split(", ")) {
    		String[] names = author.split(" ");
    		
    		authorSet.add(new AuthorEntity(names[0], names[1]));
    	}
    	
    	return authorSet;
    }

    public static List<BookTo> map2To(List<BookEntity> bookEntities) {
        return bookEntities.stream().map(BookMapper::map).collect(Collectors.toList());
    }

    public static List<BookEntity> map2Entity(List<BookTo> bookEntities) {
        return bookEntities.stream().map(BookMapper::map).collect(Collectors.toList());
    }

    private static String mapAuthors(Collection<AuthorEntity> authors) {
        if (!authors.isEmpty()) {
            return authors.stream().map(authorEntity -> authorEntity.getFirstName() + " " + authorEntity.getLastName()).collect(Collectors.joining
                    (", "));
        }
        return null;
    }
    
    public static AuthorTo map(AuthorEntity authorEntity) {
    	if (authorEntity != null) {
    		return new AuthorTo(authorEntity.getId(), authorEntity.getFirstName(), authorEntity.getLastName());
    	}
    	return null;
    }
    
    public static List<AuthorTo> mapAuthorTolist(List<AuthorEntity> authorEntities) {
    	return authorEntities.stream().map(BookMapper::map).collect(Collectors.toList());
    }
    
}