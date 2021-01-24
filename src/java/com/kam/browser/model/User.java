package com.kam.browser.model;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

  @Id
  @GeneratedValue
  @Column(nullable = false,updatable = false)
  private Long id;

  @Size(min = 4,max = 20,message = "Username length must be between 4 and 20")
  @Pattern(regexp = "[\\p{IsAlphabetic}0-9-_]+", message = "Username can only consist of letters, numbers, dashes and underscores")
  @Column(nullable = false,unique = true)
  private String username;

  @Size(min = 4,message = "Password length must be min 4")
  @Column(nullable = false)
  private String password;

  @Email(message = "An example email address is example@gmail.com")
  @Size(min = 1,message = "Email field cannot be empty")
  @Column(nullable = false,unique = true)
  private String email;

  @Column(nullable = false)
  private String role;

  @Column(columnDefinition = "boolean not null default false")
  private Boolean enabled;

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
  @Setter(value = AccessLevel.NONE)
  private List<Field> fields = new ArrayList<>();

  @OneToOne(mappedBy = "user")
  private Resources resources;

  @OneToOne(mappedBy = "user")
  private AddResources addResources;

  @OneToOne(mappedBy = "user")
  private Units units;


  public void addField(Field field) {
    fields.add(field);
  }

  @Override
  public String toString() {
    return "User{" +
      "id=" + id +
      ", username='" + username + '\'' +
      ", password='" + password + '\'' +
      ", email='" + email + '\'' +
      '}';
  }
}
